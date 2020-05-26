const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 5000;

server.listen(port, () => {
  console.log(`Application running at "http://localhost:${port}/"`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/02-timestamp.html');
});

setInterval(() => {
  io.emit('message', {
    timestamp: new Date().getTime(),
    message: Math.random().toString(36).substring(2, 12),
  });
}, 3000);
