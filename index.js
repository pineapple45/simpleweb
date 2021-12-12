const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('Hi there v4');
});

app.listen(8080, () => {
  console.log('LIstening to port 8080');
});
