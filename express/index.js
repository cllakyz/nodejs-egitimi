const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    fs.readFile('demo.html', (error, data) => {
        if (error)
            throw error;

        response.end(data);
    });
});

server.listen(3000);