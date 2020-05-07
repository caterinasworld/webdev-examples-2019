const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('<h2>Hello World, Node!</h2>');
  res.end();
});

server.listen(5000, () => console.log(`Server running...`));
