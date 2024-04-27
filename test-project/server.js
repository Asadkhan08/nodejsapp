const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send({ message: 'Hello World from seriver: ' });
});

app.listen(PORT, () => {
  console.log(`App has started listening on port: ${PORT}`);
});
