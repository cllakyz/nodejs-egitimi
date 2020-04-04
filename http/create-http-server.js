const http = require('http');

const server = http.createServer((request, response) => {
    console.log("Bir istekte bulunuldu.");
    console.log(request.headers);
    response.writeHead(200, {
        'content-type': 'text/html; charset=utf-8'
    });
    response.write(`<b>Merhaba</b> Dünya`);
    response.end();
});

server.listen(3000);