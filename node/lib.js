// const path = require('path');

// console.log(path.basename('C:\\temp\\myfile.html'))
// console.log(path.extname('C:\\temp\\myfile.html'))


// const url = require('node:url');

// const myURL = new URL('https://example.org');
// myURL.pathname = '/a/b/c';
// myURL.search = '?d=e';
// myURL.hash = '#fgh';

// console.log(myURL),


const fs = require('fs')

const data= fs.readFileSync('./new.txt','utf8')
const data1= fs.readFile('./new.txt','utf8')

console.log(data)