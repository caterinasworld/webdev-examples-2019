const express = require('express');
const app = express();
const port = 5000;

let characters = [
  {
    id: 4,
    name: 'leia organa'
  },
  {
    id: 10,
    name: 'luke skywalker'
  },
  {
    id: 16,
    name: 'darth vader'
  },
  {
    id: 23,
    name: 'han solo'
  },
  {
    id: 25,
    name: 'yoda'
  }
];

app.get('/', (req, res) => {
  let result = '';
  characters.forEach(elem => {
    // result += elem.name + '\n';
    result += '<a href="/' + elem.name + '">' + elem.name + '</a><br>';
    console.log(elem.name);
  });
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send(result);
});

app.get('/:character', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/plain' });
  res.send('this is the ' + req.params.character + ' page.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
