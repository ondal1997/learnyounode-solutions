const fs = require('fs');
const path = require('path');

const [dir, ext] = process.argv.slice(2);

fs.readdir(dir, (err, list) => { list.filter(item => path.extname(item) === '.' + ext).forEach(item => console.log(item)) });

