const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Profil Sayfası');
});

module.exports = router;