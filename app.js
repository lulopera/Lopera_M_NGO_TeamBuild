

import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>This is really easy!</h1>');
});

server.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
});
