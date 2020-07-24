const express = require('express');
const app = express();
const port = 5000;

let characters = [
  {
    id: 1,
    name: 'Luke Skywalker',
  },
  {
    id: 4,
    name: 'Darth Vader',
  },
  {
    id: 5,
    name: 'Leia Organa',
  },
  {
    id: 14,
    name: 'Han Solo',
  },
  {
    id: 20,
    name: 'Yoda',
  },
  {
    id: 34,
    name: 'Padmé Amidala',
  },
];

app.get('/', (req, res) => {
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
  res.send(`This is the ${req.params.character} page.`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
