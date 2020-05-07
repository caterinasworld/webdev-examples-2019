const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
  console.log('console.log() statements appear in the terminal');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello World, Node!</h1>');
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
