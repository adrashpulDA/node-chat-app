const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const { generateMessage, generateLocationMessage } = require('./utils/message');
const { isRealString } = require('./utils/validation');
const moment = require('moment');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath)); //configures to use public as an index

io.on('connection', (socket) => {
    console.log('New user connected');



    socket.on('join', (params, callback) => {
        if (!isRealString(params.name) || !isRealString(params.room)) {
            callback('Name and room name are required');
        }

        socket.join(params.room);
        // socket.leave - removes

        // io.emit
        // socket.broadcast.emit
        // socket.emit

        socket.emit(
            'newMessage',
            generateMessage('Admin', 'Welcome to the chat app')
        );

        socket.broadcast
            .to(params.room)
            .emit(
            'newMessage',
            generateMessage('Admin', `${params.name} has joined'`)
            );

        callback();
    });

    socket.on('createMessage', (message, callback) => {
        console.log(message);
        io.emit(
            'newMessage',
            generateMessage(message.from, message.text)
        );
    });

    socket.on('createLocationMessage', coords => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

