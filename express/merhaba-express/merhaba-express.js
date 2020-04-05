const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Merhaba express');
});

app.listen(3000, () => {
    console.log('express server çalıştı.');
});