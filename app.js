const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Dockerized THIS MY SECOND COMMIT FOR PUNE this is my third and final commit this my final commit for pune office Node.js App!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
