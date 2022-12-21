const http = require("http");

const requestListener = function (_req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
};

const server = http.createServer(requestListener);
const port = 80;
server.listen(port);
console.log("Listening on port " + port + " . . .");
