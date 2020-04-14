const http = require('http');
const socket = require('socket.io');

const server = http.createServer((req, res) => {
    res.end('Hey!');
});

server.listen(3000);

const io = socket.listen(server);

io.sockets.on('connection', (socket) => {
    console.log('Kullanıcı bağlandı.');

    socket.on('disconnect', () => {
        console.log('Kullanıcı ayrıldı.');
    });
});