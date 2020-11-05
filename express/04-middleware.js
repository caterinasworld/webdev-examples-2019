const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get('/', (req, res, next) => {
  console.log('GET route - main');
  res.send('This is the main route');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
