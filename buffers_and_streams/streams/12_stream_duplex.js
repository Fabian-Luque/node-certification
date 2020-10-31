const { Duplex } = require('stream');

const inputStream = new Duplex({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
    },
    read(size) {
        this.push(String.fromCharCode(this.currentCharCode++));
        if ( this.currentCharCode > 90 ) this.push(null);
    }
});

inputStream.currentCharCode = 65;

process.stdin.pipe(inputStream).pipe(process.stdout);