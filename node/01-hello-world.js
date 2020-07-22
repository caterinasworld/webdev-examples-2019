const http = require('http');

// create the server object
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // response headers
  res.write('Hello World, Node!'); // write a response to the client
  res.end(); // end the response
});

// set the server to listen on port 5000
server.listen(5000, () => {
  console.log(`Server running at http://localhost:5000`);
});
