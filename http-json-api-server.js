const http = require("http");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://example.com");
  let result;

  if (req.method === "GET") {
    if (url.pathname === "/api/parsetime") {
      const date = new Date(url.searchParams.get("iso"));

      result = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      };
    } else if (url.pathname === "/api/unixtime") {
      const date = new Date(url.searchParams.get("iso"));

      result = {
        unixtime: date.getTime(),
      };
    }
  }

  if (result) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(process.argv[2]);
