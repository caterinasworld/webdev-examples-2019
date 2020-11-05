const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// app.use(cors());

app.get('/without-cors', (req, res, next) => {
  res.write('Route without CORS.');
  res.end();
});

app.get('/with-cors', cors(), (req, res, next) => {
  res.write('Route with CORS');
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
