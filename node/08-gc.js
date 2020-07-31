const http = require('http');
const port = 5000 || process.env.PORT;

const server = http.createServer((req, res) => {
  let data = [];
  if (req.url === '/') {
    data.push(Array(100000).join('abc'));
    console.log(data);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World, Node!\n');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// run file with
// node --trace_gc filename.js
// for i in {1..10}; do curl localhost:5000 && sleep 1; done
