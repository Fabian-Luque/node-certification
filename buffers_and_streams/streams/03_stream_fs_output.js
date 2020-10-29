const fs = require('fs');

const inputFileStream = fs.createReadStream('file.txt');

inputFileStream.pipe(process.stdout);