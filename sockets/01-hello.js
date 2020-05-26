const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 5000;

server.listen(port, () => {
  console.log(`Application running at "http://localhost:${port}/"`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/01-hello.html');
});

io.on('connection', (socket) => {
  socket.emit('hello', {
    hello: 'world',
  });
  socket.on('goodbye', (data) => {
    console.log(data);
  });
});
