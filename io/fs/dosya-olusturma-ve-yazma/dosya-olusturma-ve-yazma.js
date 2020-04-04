/*
* fs.appendFile();
* fs.writeFile();
 */

const fs = require('fs');
/*
fs.appendFile('demo.txt', 'Hello World\n', (error) => {
    if (error)
        throw error;
    console.log('Dosyaya ekleme yapıldı');
});
*/

fs.writeFile('demo2.txt', 'Hello World', (error) => {
    if (error)
        throw error;
    console.log('Dosyaya yazıldı');
});
