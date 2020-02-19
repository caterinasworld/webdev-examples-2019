const express = require('express');
const parser = require('body-parser');
const app = express();
const port = 5000;

app.use(
  parser.urlencoded({
    extended: false,
    limit: 1024
  })
);

app.get('/form', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.write('<form action="/submit" method="post">');
  res.write('<label for="name">Name: </label>');
  res.write('<input type="text" name="name" id="name"><br />');
  res.write('<label for="email">Email: </label>');
  res.write('<input type="text" name="email" id="email"><br />');
  res.write('<input type="submit">');
  res.write('</form></body></html>');
  res.end();
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  console.log(req.body.name, req.body.email);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
