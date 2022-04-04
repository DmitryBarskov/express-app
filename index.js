const server = require('./src/server.js').server;

const port = 3000;

server.listen(port, () => {
  console.log(`express-app is running on port ${port}...`);
});
