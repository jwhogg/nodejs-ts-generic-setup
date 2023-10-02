import http, { IncomingMessage, ServerResponse } from 'http';

// Create an HTTP server
const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  // Set the response HTTP header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response content
  res.end('Hello, World:)\n');
});

// Specify the port to listen on
const port = 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { server }; // Export the server
