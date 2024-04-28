const express = require('express');

const app = express();

const PORT = 3002;

app.get('/', (req, res) => {
  res.send({ message: 'this message is coming from another container having v2! ' });
});

app.listen(PORT, () => {
  console.log(`App has started listening on port: ${PORT}`);
});
