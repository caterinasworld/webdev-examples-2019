const http = require("http");

const server = http.createServer((req, res) => {
  console.log("in create server");
  res.writeHead(200, { "Context-Type": "text/html" });
  res.write("<h1>hello world testing!</h1>");
  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
