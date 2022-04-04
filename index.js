const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('You are awesome!');
});

app.listen(port, () => {
  console.log(`express-app is running on port ${port}...`);
});
