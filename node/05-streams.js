const http = require('http');
const fs = require('fs');
const port = 5000 || process.env.PORT;

const server = http.createServer((req, res) => {
  const readable = fs.createReadStream('lorem.txt');
  const writeable = fs.createWriteStream('out.txt');
  readable.pipe(writeable);
  readable.pipe(res);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
