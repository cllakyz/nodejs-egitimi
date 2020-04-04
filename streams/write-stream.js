const fs = require('fs');
const file = 'video.mp4';

let progress = 0;

const readStream = fs.createReadStream(file);
const writeStream = fs.createWriteStream('new.mp4');

fs.stat(file, (error, data) => {
    const totalSize = data.size;

    readStream.on('data', (chunk) => {
        progress += chunk.length;
        console.log(Math.round((100 * progress) / totalSize) + '%');
    });

    readStream.pipe(writeStream);
    writeStream.on('finish', () => {
        console.log('Yeni dosya oluşturuldu.');
    });
});