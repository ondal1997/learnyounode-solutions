// const http = require('http');
// const bl = require('bl');

// http.get(process.argv[2], (res) => {
//   res.pipe(bl((err, data) => {
//     if (err) return console.error(err);
//     console.log(data.toString().length);
//     console.log(data.toString());
//   }));
// });

const http = require('http');

let body = [];

http.get(process.argv[2], (res) => {
  res.on('data', (data) => {
    body.push(data);
  })

  res.on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(body.length);
    console.log(body);
  })
});
