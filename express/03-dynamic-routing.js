const express = require('express');
const app = express();
const port = 5000;

const characters = require('./characters');

app.get('/', (req, res) => {
  // console.log(characters);

  let result = '';

  characters.forEach((elem) => {
    console.log(elem.name);
    result += `<li><a href="/${elem.name}">${elem.name}</a><br></li>`;
  });

  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.write(`<h2>Star Wars Characters</h2>`);
  res.write(`<ul>`);
  res.write(result);
  res.write(`</ul>`);
  res.end();
});

app.get('/:character', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/plain' });
  res.write(`This is the ${req.params.character} page.`);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
