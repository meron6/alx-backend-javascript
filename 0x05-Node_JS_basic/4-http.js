const http = require('http');

const host = 'localhost';
const port = 1245;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = server;
