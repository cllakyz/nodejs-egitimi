const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const user = false;
    if (user)
        res.send('User Sayfası');
    else
        return next({
            status: 404,
            message: "Kullanıcı Bulunamadı"
        });
});

module.exports = router;