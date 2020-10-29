const fs = require('fs');

const outputStream = fs.createWriteStream('file.txt', { flags: "a" });

process.stdin.pipe(outputStream);