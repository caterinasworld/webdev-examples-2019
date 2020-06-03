const express = require('express');
const app = express();
const port = 5000;

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Main', header: 'Main Page' });
});

app.get('/about', (req, res) => {
  res.render('index', { title: 'About', header: 'About Page' });
});

app.get('/contact', (req, res) => {
  res.render('index', { title: 'Contact', header: 'Contact Page' });
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
