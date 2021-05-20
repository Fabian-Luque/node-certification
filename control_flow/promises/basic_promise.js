const fs = require("fs");

const myPromise = new Promise((resolve, reject) => {
    fs.readFile("example.json", (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});

myPromise.then(data => console.log(data)).catch(err=> console.log(err));