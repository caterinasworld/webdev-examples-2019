const express = require('express');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 5000;

app.use(
  session({
    store: new session.MemoryStore(),
    secret: 'a secret to sign the cookie',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 86400000
    }
  })
);

app.get('/', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/plain' });
  if (req.session.example === undefined) {
    req.session.example = [];
    res.send('you must be new');
  } else {
    req.session.example.push(Math.random());
    res.send(req.session.example.join('\n'));
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
