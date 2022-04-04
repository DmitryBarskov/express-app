const express = require('express');
const server = express();

server.get('/hello', (req, res) => {
  res.send('You are awesome!');
});

module.exports.server = server;
