const express = require('express');
const router = express.Router();

router.get('/signIn', (req, res) => {
    res.send('Sign In Sayfası');
});

router.post('/signIn', (req, res) => {
    res.send('Sign In Sayfası (POST Method)');
});

module.exports = router;