const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err);
    callback(null, list.filter(item => path.extname(item) === '.' + ext));
  });
};

