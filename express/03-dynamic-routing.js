const express = require('express');
const characters = require('./characters');

const app = express();
const port = process.env.PORT || 5000;


let getCharacters = () => {
  let result = '';

  characters.forEach((elem) => {
    console.log(elem.name);
    result += `<li><a href="/${elem.name}">${elem.name}</a><br></li>`;
  });

  return result;
}

app.get('/', (req, res) => {

  let result = getCharacters();

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
