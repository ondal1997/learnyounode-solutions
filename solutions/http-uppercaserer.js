const http = require("http");

// through2-map 모듈을 이용해서 req -> res 파이프를 구성할 수 있다.
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.on('data', (data) => {
            res.write(data.toString().toUpperCase());
        });
        req.on('end', () => {
            res.end();
        });
    }
});

server.listen(process.argv[2]);
