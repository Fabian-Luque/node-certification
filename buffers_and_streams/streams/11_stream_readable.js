const { Readable } = require('stream');

// poco eficaz
// const inStream = new Readable({
//     read() {}
// });

// inStream.push('ABCDEFGHIJKLM');
// inStream.push('NOPQRSTUVWXTZ');
// inStream.push(null);


const inStream = new Readable({
    read(size) {
        this.push(String.fromCharCode(this.currentCharCode++));
        if (this.currentCharCode > 90) this.push(null);
    }
});

inStream.currentCharCode = 65;



inStream.pipe(process.stdout);