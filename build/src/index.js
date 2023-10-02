"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const http_1 = __importDefault(require("http"));
// Create an HTTP server
const server = http_1.default.createServer((req, res) => {
    // Set the response HTTP header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Write the response content
    res.end('Hello, World:)\n');
});
exports.server = server;
// Specify the port to listen on
const port = 3000;
// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
