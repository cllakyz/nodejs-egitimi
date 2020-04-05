const express = require('express');
const router = express.Router();

router.get('/signUp', (req, res) => {
    res.send('Sign Up Sayfası');
});

router.post('/signUp', (req, res) => {
    res.send('Sign Up Sayfası (POST Method)');
});

module.exports = router;