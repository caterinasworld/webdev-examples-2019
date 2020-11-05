const express = require('express');
const app = express();
const port = 5000;

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
// app.use(express.static('/public'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Main', heading: 'Welcome to this Website!' });
});

app.get('/about', (req, res) => {
  res.render('page', {
    title: 'About',
    heading: 'About Page',
    subheading: 'Sub-Heading #1',
  });
});

app.get('/contact', (req, res) => {
  res.render('page', {
    title: 'Contact',
    heading: 'Contact Page',
    subheading: 'Sub-Heading #2',
  });
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
