const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// public folder contains static file(s) that will be served
app.use(express.static('public'));

// specify the URL route and the file structure route
app.use('/images', express.static('images'));

// send a specific file to be served to the client
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/about.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
