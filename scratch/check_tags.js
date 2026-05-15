import fs from 'fs';

const content = fs.readFileSync('d:/FareastCalibration/fareastcalibration/src/pages/Home.tsx', 'utf8');
const lines = content.split('\n');

let stack = [];
lines.forEach((line, i) => {
    const openMatches = line.matchAll(/<Box(?! [^>]*\/>)(?![^>]*\/>)/g);
    for (const match of openMatches) {
        stack.push({ line: i + 1, type: 'Box' });
    }
    const closeMatches = line.matchAll(/<\/Box>/g);
    for (const match of closeMatches) {
        if (stack.length > 0) {
            stack.pop();
        } else {
            console.log(`Extra </Box> at line ${i + 1}`);
        }
    }
});

stack.forEach(s => {
    console.log(`Unclosed ${s.type} at line ${s.line}`);
});
