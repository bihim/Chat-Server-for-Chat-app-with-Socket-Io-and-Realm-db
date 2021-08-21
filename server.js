const express = require('express'); //requires express module
const socket = require('socket.io'); //requires socket.io module
const fs = require('fs');
const app = express();
var PORT = process.env.PORT || 3000;
const server = app.listen(PORT); //tells to host server on localhost:3000


app.use(express.static('public')); 
console.log('Server is running');
const io = socket(server);

io.on('connection', (socket) => {

    console.log("New socket connection: " + socket.id)

    socket.on('message', (message) => {
        console.log(message)
        io.emit('message', message);
    })

    socket.on('typing', (typing) => {
        console.log(typing)
        io.emit('typing', typing);
    })

    socket.on('whoJoined', (whoJoined) => {
        console.log(whoJoined)
        io.emit('whoJoined', whoJoined  );
    })


})