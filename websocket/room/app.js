const http = require('http');
const socketio = require('socket.io');

const server = http.createServer((req, res) => {
    res.end('Hey!');
});

server.listen(3000);
const io = socketio.listen(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.join('room1');
    socket.join('room2');
    socket.join('room3', () => {
        const rooms = getOnlinedRomms(socket);
        console.log(rooms);
    });

    socket.on('joinRoom', (data) => {
        socket.join(data.name, () => {
            // socket.to(data.name).emit('newJoin', { count: getOnlineCount(data) }); // odaya giren kişi hariç diğer kişilere emit eder.
            io.to(data.name).emit('newJoin', { count: getOnlineCount(data) }); // odaya giren kişi dahil herkese emit eder.
            socket.emit('log', { message: 'Odaya girdiniz.' });
            const rooms = getOnlinedRomms(socket);
            console.log(rooms);
        });
    });

    socket.on('leaveRoom', (data) => {
        socket.leave(data.name, () => {
            io.to(data.name).emit('leavedRoom', { count: getOnlineCount(data) });
            socket.emit('logLeaved', { message: 'Odadan ayrıldınız.' });
            const rooms = getOnlinedRomms(socket);
            console.log(rooms);
        });
    });
});

const getOnlineCount = (data) => {
    const room = io.sockets.adapter.rooms[data.name];
    return room ? room.length : 0;
};

const getOnlinedRomms = (socket) => Object.keys(socket.rooms);