const express = require('express');
const router = express.Router();

// Models
const Book = require('../models/Book');

/* POST books save. */
router.post('/store', (req, res, next) => {
    const book = new Book({
        title: 'Udemy Laravel',
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
        '5e919b382758fa373c975b22',
        {
            //title: 'Hello World',
            'meta.favs': 101,
            //published: false,
        },
        (err, data) => {
            if (err)
                res.json(err);
            res.json(data);
        });
});

/*
 * findOne() -> remove()
 * findOneAndRemove()
 * remove()
 */
/* DELETE books */
router.delete('/destroy', (req, res) => {
    /*Book.findById('5e90db40d1485d01e6fa106a', (err, book) => {
        if (err)
            res.json(err);
        book.remove((err, data) => {
            if (err)
                res.json(err);
            res.json(data);
        });
    });*/
    /*Book.findOneAndRemove({ published: true }, (err, data) => {
        if (err)
            res.json(err);
        res.json(data);
    });*/
    Book.remove({ /*published: true*/ }, (err, data) => {
        if (err)
            res.json(err);
        res.json(data);
    });
});

/* GET books sort */
router.get('/sort', (req, res) => {
    Book.find({}, (err, data) => {
        if (err)
            res.json(err);
        res.json(data);
    }).sort({ /*'meta.favs': 1,*/ 'title': -1 });
});

/* GET books limit and skip */
router.get('/limitSkip', (req, res) => {
    Book.find({ }, (err, data) => {
        if (err)
            res.json(err);
        res.json(data);
    })
    .skip(1)
    .limit(2);
});

module.exports = router;
