const request = require('request');
const npmDb = 'https://skimdb.npmjs.com';
const registryUrl = `${npmDb}/registry/_changes?include_docs=true`;

console.log('data');
request(registryUrl, (err, data) => {
    console.log(data);
    if (err) throw err
    let numberOfLines = data.split('\n').length + 1
    console.log('Total modules on npm: ' + numberOfLines);
});

console.log('pasa');