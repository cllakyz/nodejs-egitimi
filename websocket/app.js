const http = require('http');
const socket = require('socket.io');

const server = http.createServer((req, res) => {
    res.end('Hey!');
});

server.listen(3000);

const io = socket.listen(server);

io.sockets.on('connection', (socket) => {
    console.log('Kullanıcı bağlandı.');

    setTimeout(() => {
        socket.emit('merhaba', { country: 'Türkiye' });
    }, 2000);

    socket.on('selamVer', (data) => {
        console.log('selam', data);
    });

    socket.on('disconnect', () => {
        console.log('Kullanıcı ayrıldı.');
    });
});