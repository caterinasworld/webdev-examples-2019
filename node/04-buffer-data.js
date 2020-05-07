const http = require('http');
const fs = require('fs');
const port = 5000 || process.env.PORT;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('lorm.txt', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('\n====== data buffer: ======\n', data);
      console.log('\n====== data toJSON: ======\n', data.toJSON());
      console.log('\n====== data toString: ======\n', data.toString());
    });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>Reading buffer...</h2>');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404: Page not found</h1>');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
