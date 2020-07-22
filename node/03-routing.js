const http = require('http');
const port = 5000 || process.env.PORT;

let characters = [
  {
    id: 4,
    first: 'Leia',
    last: 'Organa',
  },
  {
    id: 10,
    first: 'Luke',
    last: 'Skywalker',
  },
  {
    id: 16,
    first: 'Darth',
    last: 'Vader',
  },
];

const server = http.createServer((req, res) => {
  // main route
  if (req.url === '/') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello! This is the main page</h1>');
    res.end();
  }
  // new route --> /contact
  else if (req.url === '/contact') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is the contact page</h1>');
    res.end();
  }
  // new route --> /data
  else if (req.url === '/data') {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(characters));
    res.end();
  }
  // new route --> handle 404
  else {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404: Page not found</h1>');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
