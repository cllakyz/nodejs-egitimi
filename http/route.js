const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'content-type': 'text/html; charset=utf-8'
    });

    if (request.method === "GET") {
        if (request.url === "/")
            response.write('index');
        else if (request.url === "/contact")
            response.write('İletişim');
        else
            response.write('Sayfa Bulunamadı')
    } else
        response.write('Geçersiz İstek');

    response.end();
});

server.listen(3000);