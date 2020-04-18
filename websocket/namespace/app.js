const http = require('http');
const socket = require('socket.io');

const server = http.createServer((req, res) => {
    res.end('Hey!');
});
server.listen(3000);
const io = socket.listen(server);

const nsp = io.of('/users');
nsp.on('connection', (s) => {
    console.log('user connected');
    s.on('isimYaz', () => {
        nsp.emit('herkeseGonder', { name: 'Celal' });
    });
});