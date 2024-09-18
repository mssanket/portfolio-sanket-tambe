const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('form-submitted', (data) => {
        io.emit('new-message', data); // Broadcast the message to all clients
    });
});

server.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
