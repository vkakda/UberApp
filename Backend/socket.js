const socketIo = require('socket.io');
const userModel = require('./models/user.model');
const captainModel = require('./models/captain.model');

let io;

function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: [ 'GET', 'POST' ]
        }
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);

        socket.on('join', async (data) => {
            const { userId, userType } = data;
            console.log(`Join event received for ${userType} with ID ${userId} on socket ${socket.id}`);
          
            if (userType === 'captain') {
              const updatedCaptain = await captainModel.findByIdAndUpdate(
                userId,
                { socketId: socket.id },
                { new: true }
              );
              console.log("Updated captain document:", updatedCaptain);
            }
          });


        socket.on('update-location-captain', async (data) => {
            const { userId, location } = data;

            if (!location || !location.ltd || !location.lng) {
                return socket.emit('error', { message: 'Invalid location data' });
            }

            await captainModel.findByIdAndUpdate(userId, {
                location: {
                    ltd: location.ltd,
                    lng: location.lng
                }
            });
        });
        console.log(`Updating location for captain ${userId}:`, location);

        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });
}

const sendMessageToSocketId = (socketId, messageObject) => {
    console.log(`Emitting event '${messageObject.event}' to socket ID: ${socketId}`);
    console.log("Event data:", messageObject.data);
  
    if (io) {
      io.to(socketId).emit(messageObject.event, messageObject.data);
    } else {
      console.log("Socket.io not initialized.");
    }
  };

module.exports = { initializeSocket, sendMessageToSocketId };