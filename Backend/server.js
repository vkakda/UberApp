const http = require('http')
const app = require('./app');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

// Added logging for debugging incoming requests
server.on('request', (req) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
});

// Added error handling logging
server.on('error', (error) => {
  console.error('Server error:', error);
});

// Require the socket functions and initialize socket.io
const { initializeSocket } = require('./socket');
initializeSocket(server);

server.listen(port, () => {
	console.log(`server is running on port ${port}`);
});