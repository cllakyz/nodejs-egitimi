const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'content-type': 'text/html; charset=utf-8'
    });
    fs.readFile('index.html', (error, data) => {
        if (error)
            throw error;

        response.end(data);
    });
});

server.listen(3001);