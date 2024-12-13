const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 3000;

app.use(express.static('public')); // Serve static files from the 'public' folder

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('chat message', (msg) => {
        // Send message with the sender's socket ID
        io.emit('chat message', { id: socket.id, msg });
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
