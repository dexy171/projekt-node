const fs = require("fs");
const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3001;

const html = fs.readFileSync("index.html", "utf-8");

const DEFAULT_PATH = "/";
const INTRODUCTION_PATH = "/introduction";

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === DEFAULT_PATH) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else if (path === INTRODUCTION_PATH) {
    res.writeHead(200, { "Content-Type": "text/html" });
    const data = fs.readFileSync("data.json", "utf-8");
    res.end(data);
  } else {
    res.statusCode = 404;
    res.end(`Page not found.`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
