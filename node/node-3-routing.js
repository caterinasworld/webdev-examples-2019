const http = require('http');
const port = 5000 || process.env.PORT;

let characters = [
  {
    id: 4,
    first: 'leia',
    last: 'organa'
  },
  {
    id: 10,
    first: 'luke',
    last: 'skywalker'
  },
  {
    id: 16,
    first: 'darth',
    last: 'vader'
  }
];

const server = http.createServer((req, res) => {
  // main route
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>hello world!</h1>');
    res.end();
  }
  // new route --> /contact
  else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is the contact page</h1>');
    res.end();
  }
  // new route --> /data
  else if (req.url === '/data') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(characters));
    res.end();
  }
  // new route --> handle 404
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('<h1>404: Page not found</h1>');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
