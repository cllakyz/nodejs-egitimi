const express = require('express');
const router = express.Router();

// Models
const Book = require('../models/Book');

/* GET users listing. */
router.get('/create', function(req, res, next) {
    const book = new Book({
        title: 'Udemy Node.JS'
    });

    book.save((err, data) => {
        if (err)
            console.log(err);
        res.json(data);
    });
});

module.exports = router;
