// example adapted from the Nodejs.org docs
const static = require('node-static');
const http = require('http');
const port = 5000 || process.env.PORT;

const file = new static.Server();

const server = http.createServer((req, res) => {
  file.serve(req, res);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
