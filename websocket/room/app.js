const http = require('http');
const socket = require('socket.io');

const server = http.createServer((req, res) => {
    res.end('Hey!');
});

server.listen(3000);
const io = socket.listen(server);

io.on('connection', (conn) => {
    conn.on('joinRoom', (data) => {
        conn.join(data.name, () => {
            let count = io.sockets.adapter.rooms[data.name].length;
            // conn.to(data.name).emit('newJoin', { count }); // odaya giren kişi hariç diğer kişilere emit eder.
            io.to(data.name).emit('newJoin', { count }); // odaya giren kişi dahil herkese emit eder.
            conn.emit('log', { message: 'Odaya girdiniz.' });
        });
    });
});