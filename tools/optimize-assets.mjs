import { readdir, rename, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const assetsDir = path.resolve('src/assets');
const rasterExtensions = new Set(['.jpg', '.jpeg', '.png']);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(entryPath));
    } else if (entry.isFile() && rasterExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(entryPath);
    }
  }

  return files;
}

function getOutputPath(filePath) {
  const parsed = path.parse(filePath);
  return path.join(parsed.dir, `${parsed.name}.webp`);
}

async function assertNoCollisions(files) {
  const outputs = new Map();

  for (const file of files) {
    const output = getOutputPath(file).toLowerCase();
    if (outputs.has(output)) {
      throw new Error(`Output collision: "${file}" and "${outputs.get(output)}" would both write "${getOutputPath(file)}"`);
    }
    outputs.set(output, file);
  }
}

const jpgWebpOptions = { quality: 78, effort: 6, smartSubsample: true };
const pngWebpOptions = [
  { lossless: true, effort: 6 },
  { quality: 82, effort: 6, smartSubsample: true },
];

async function convertToWebp(file, output) {
  const extension = path.extname(file).toLowerCase();

  if (extension !== '.png') {
    await sharp(file).rotate().webp(jpgWebpOptions).toFile(output);
    return;
  }

  const candidates = await Promise.all(
    pngWebpOptions.map(async (options, index) => {
      const candidate = `${output}.${index}.tmp`;
      await sharp(file).rotate().webp(options).toFile(candidate);
      const candidateStats = await stat(candidate);
      return { path: candidate, size: candidateStats.size };
    }),
  );

  candidates.sort((a, b) => a.size - b.size);
  const [best, ...rest] = candidates;
  await rm(output, { force: true });
  await rename(best.path, output);
  await Promise.all(rest.map((candidate) => rm(candidate.path)));
}

const files = await walk(assetsDir);
await assertNoCollisions(files);

let originalBytes = 0;
let optimizedBytes = 0;

for (const file of files) {
  const inputStats = await stat(file);
  const output = getOutputPath(file);
  await convertToWebp(file, output);

  const outputStats = await stat(output);
  await rm(file);

  originalBytes += inputStats.size;
  optimizedBytes += outputStats.size;
  console.log(`${path.relative(process.cwd(), file)} -> ${path.relative(process.cwd(), output)} (${inputStats.size} -> ${outputStats.size} bytes)`);
}

const savedBytes = originalBytes - optimizedBytes;
const savedPercent = originalBytes === 0 ? 0 : (savedBytes / originalBytes) * 100;

console.log(`Converted ${files.length} images.`);
console.log(`Original: ${(originalBytes / 1024 / 1024).toFixed(2)} MB`);
console.log(`Optimized: ${(optimizedBytes / 1024 / 1024).toFixed(2)} MB`);
console.log(`Saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB (${savedPercent.toFixed(1)}%)`);
