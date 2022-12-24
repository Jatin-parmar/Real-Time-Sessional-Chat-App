const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

//SocketIo

// const io = require('socket.io')(app.listen(3001))
const server = app.listen(3003);
var io = require('socket.io')(server);

io.sockets.on('connection', (socket) => {
    console.log("Connected");
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })
})

// server.listen(3002) //No needed because modified syntax for socket.io