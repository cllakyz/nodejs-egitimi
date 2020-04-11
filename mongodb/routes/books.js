const express = require('express');
const router = express.Router();

// Models
const Book = require('../models/Book');

/* POST books save. */
router.post('/store', (req, res, next) => {
    const book = new Book({
        title: 'Udemy Python',
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

/* GET books one search */
router.get('/searchOne', (req, res) => {
    Book.findOne({ title: 'Udemy Node.JS' }, (err, data) => {
        if (err)
            res.json(err);
        res.json(data);
    });
});

/* GET books searchById */
router.get('/searchById', (req, res) => {
    Book.findById('5e8b9cd01a51da1a887bdeeb', (err, data) => {
        if (err)
            res.json(err);
        res.json(data);
    });
});

/* PUT books update */
router.put('/update', (req, res) => {
    Book.update(
        {
            published: false
        },
        {
            published: true,
            title: 'deneme title'
        },
        {
            // multi: true
            upsert: true
        }, (err, data) => {
        if (err)
            res.json(err);
        res.json(data);
    });
});

/* PUT books updete by id */
router.put('/updateById', (req, res) => {
    Book.findByIdAndUpdate(
        '5e918f57d1485d01e6fa119e',
        {
            title: 'Hello World',
            //'meta.favs': 99,
            published: false,
        },
        (err, data) => {
            if (err)
                res.json(err);
            res.json(data);
        });
});

module.exports = router;
