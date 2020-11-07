const express = require('express');
const app = express();
const server = require('http').Server(app);
const assert = require('assert');
const io = require('socket.io')(server);
const port = 5000;

server.listen(port, () => {
  console.log(`Application running at "http://localhost:${port}/"`);
});

app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/03-draggable.html');
});

io.on('connection', (socket) => {
  console.log('client connected');

  let elems = [];

  elems.forEach((item) => {
    io.emit('drag', item);
  });

  socket.on('drag', (data) => {
    console.log(data);

    assert(data.boxId !== undefined);
    assert(data.left !== undefined);
    assert(data.top !== undefined);

    elems[data.boxId] = data;

    io.emit('drag', data);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});
