const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath)); //configures to use public as an index

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });

    socket.emit('newMessage', {
        from: 'me',
        text: 'text',
        createdAt: 1234
    }); 

    socket.on('createMessage', (data) => {
        console.log(data);
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
