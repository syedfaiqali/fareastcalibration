import { mkdir, readdir, rename, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { setTimeout as delay } from 'node:timers/promises';

sharp.cache(false);

const roots = ['src/assets', 'public', 'scratch'].map((root) => path.resolve(root));
const convertExtensions = new Set(['.jpg', '.jpeg', '.png', '.bmp', '.tif', '.tiff', '.gif']);
const compressExtensions = new Set([...convertExtensions, '.webp']);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(entryPath));
    } else if (entry.isFile() && compressExtensions.has(path.extname(entry.name).toLowerCase())) {
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

  for (const file of files.filter((file) => convertExtensions.has(path.extname(file).toLowerCase()))) {
    const output = getOutputPath(file).toLowerCase();
    if (outputs.has(output)) {
      throw new Error(`Output collision: "${file}" and "${outputs.get(output)}" would both write "${getOutputPath(file)}"`);
    }
    outputs.set(output, file);
  }
}

const jpgWebpOptions = { quality: 78, effort: 6, smartSubsample: true };
const existingWebpOptions = { quality: 78, effort: 6, smartSubsample: true };
const pngWebpOptions = [
  { lossless: true, effort: 6 },
  { quality: 82, effort: 6, smartSubsample: true },
];

async function retryFileOperation(operation) {
  let lastError;

  for (let attempt = 0; attempt < 6; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;

      if (!['EBUSY', 'EPERM'].includes(error.code)) {
        throw error;
      }

      await delay(150 * (attempt + 1));
    }
  }

  throw lastError;
}

async function convertToWebp(file, output) {
  const extension = path.extname(file).toLowerCase();

  await mkdir(path.dirname(output), { recursive: true });

  if (extension === '.webp') {
    const candidate = `${output}.tmp`;
    const buffer = await sharp(file).rotate().webp(existingWebpOptions).toBuffer();
    await writeFile(candidate, buffer);
    return candidate;
  }

  if (extension !== '.png') {
    await sharp(file).rotate().webp(jpgWebpOptions).toFile(output);
    return output;
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
  await retryFileOperation(() => rm(output, { force: true }));
  await retryFileOperation(() => rename(best.path, output));
  await Promise.all(rest.map((candidate) => retryFileOperation(() => rm(candidate.path))));
  return output;
}

const files = (await Promise.all(roots.map(async (root) => {
  try {
    return await walk(root);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }

    throw error;
  }
}))).flat();

await assertNoCollisions(files);

let originalBytes = 0;
let optimizedBytes = 0;
let convertedCount = 0;
let recompressedCount = 0;
let skippedCount = 0;

for (const file of files) {
  const extension = path.extname(file).toLowerCase();
  const inputStats = await stat(file);
  const output = getOutputPath(file);
  const result = await convertToWebp(file, output);

  if (extension === '.webp') {
    const outputStats = await stat(result);

    if (outputStats.size < inputStats.size) {
      await retryFileOperation(() => rm(file));
      await retryFileOperation(() => rename(result, file));
      originalBytes += inputStats.size;
      optimizedBytes += outputStats.size;
      recompressedCount += 1;
      console.log(`${path.relative(process.cwd(), file)} recompressed (${inputStats.size} -> ${outputStats.size} bytes)`);
    } else {
      await retryFileOperation(() => rm(result));
      originalBytes += inputStats.size;
      optimizedBytes += inputStats.size;
      skippedCount += 1;
      console.log(`${path.relative(process.cwd(), file)} kept (${inputStats.size} bytes)`);
    }
  } else {
    const outputStats = await stat(output);
    await retryFileOperation(() => rm(file));
    originalBytes += inputStats.size;
    optimizedBytes += outputStats.size;
    convertedCount += 1;
    console.log(`${path.relative(process.cwd(), file)} -> ${path.relative(process.cwd(), output)} (${inputStats.size} -> ${outputStats.size} bytes)`);
  }
}

const savedBytes = originalBytes - optimizedBytes;
const savedPercent = originalBytes === 0 ? 0 : (savedBytes / originalBytes) * 100;

console.log(`Converted ${convertedCount} images.`);
console.log(`Recompressed ${recompressedCount} WebP images.`);
console.log(`Kept ${skippedCount} WebP images that were already smaller.`);
console.log(`Original: ${(originalBytes / 1024 / 1024).toFixed(2)} MB`);
console.log(`Optimized: ${(optimizedBytes / 1024 / 1024).toFixed(2)} MB`);
console.log(`Saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB (${savedPercent.toFixed(1)}%)`);
