const mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], (err, list) => {
  if (err) return console.error(err);
  list.forEach((item) => console.log(item));
});

