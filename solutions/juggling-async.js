const http = require("http");
const bl = require("bl");

let urls = process.argv.slice(2);
let datas = [];
let count = 0;

urls.forEach((url, index) => {
  http.get(url, (res) => {
    res.pipe(
      bl((err, data) => {
        if (err) return console.error(err);
        datas[index] = data.toString();
        count++;
        if (count === urls.length) {
          datas.forEach((data) => {
            console.log(data);
          });
        }
      })
    );
  });
});
