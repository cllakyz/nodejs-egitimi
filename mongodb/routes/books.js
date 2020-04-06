const express = require('express');
const router = express.Router();

// Models
const Book = require('../models/Book');

/* POST books save. */
router.post('/store', (req, res, next) => {
    const book = new Book({
        title: 'Udemy PHP',
        published: false,
        comments: [
            { message: "Harika bir kitap." },
            { message: "Ben pek beğenmedim." },
        ],
        meta: {
            votes: 12,
            favs: 104,
        }
    });

    book.save((err, data) => {
        if (err)
            res.json(err);
        res.json(data);
    });
});

/* GET books search */
router.get('/search', (req, res) => {
    Book.find({
        //published: false,
        //title: "PHP",
    }, (err, data) =>{
        if (err)
            res.json(err);
        res.json(data);
    });
});

module.exports = router;
