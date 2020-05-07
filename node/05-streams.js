const http = require('http');
const fs = require('fs');
const port = 5000 || process.env.PORT;

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('lorem.txt');
  stream.pipe(res);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
