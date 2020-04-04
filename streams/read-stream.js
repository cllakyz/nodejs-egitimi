const fs = require('fs');
const file = 'video.mp4';

let progress = 0;

const readStream = fs.createReadStream(file);

fs.stat(file, (error, data) => {
    const totalSize = data.size;

    readStream.on('data', (chunk) => {
        progress += chunk.length;
        console.log(Math.round((100 * progress) / totalSize) + '%');
    });

    readStream.on('end', () => {
        console.log('Veri okunması tamamlandı.');
        console.log('Toplam boyut: ' + progress);
    });
});