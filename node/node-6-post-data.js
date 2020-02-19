// example from the Nodejs.org docs
const http = require('http');
const port = 5000 || process.env.PORT;

const postHTML = `<html><head><title>Post Example</title></head><body>
  <form method='post'>
  <label for="name">Name: </label>
  <input type="text" name="name" id="name"><br />
  <label for="email">Email: </label>
  <input type="text" name="email" id="email"><br />
  <input type='submit'>
  </form></body></html>`;

const server = http.createServer(function(req, res) {
  let body = '';
  req.on('data', chunk => {
    body += chunk;
  });
  req.on('end', () => {
    console.log('POST information: ' + body);
    console.log('POST information: ' + body.name);
    res.writeHead(200);
    res.end(postHTML);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
