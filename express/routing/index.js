const express = require('express');
const app = express();

// get, post, put, delete, all

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.post('/contact', (req, res) => {
    res.send('Contact Page Post Method');
});

app.get('/users/:id/:postId?', (req, res) => {
    res.send(req.params);
});

app.listen(3000, () => {
    console.log('express server çalıştı.');
});