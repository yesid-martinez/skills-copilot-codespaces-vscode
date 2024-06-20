// Create a web server
// Create a web server that listens for incoming requests on port 3000 and responds with the message "Hello, World!".
// Use the createServer method from the http module to create a new web server.
// Use the listen method to bind the server to port 3000.
// Use the writeHead method to set the Content-Type header to text/plain.
// Use the end method to send the response body "Hello, World!".

// Import the http module
const http = require('http');

// Create a web server
const server = http.createServer((req, res) => {
  // Set the Content-Type header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  res.end('Hello, World!');
});

// Bind the server to port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});