const express = require('express');
const mongoose = require('mongoose');
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
        year: 5000,
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

/* GET books search exists */
router.get('/search-exists', (req, res) => {
    Book.find({
        category: {
            $exists: true
        }
    }, 'title comments category', (err, data) =>{
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

/* GET aggregate */
router.get('/aggregate', (req, res) => {
    Book.aggregate([
        {
            $match: {
                published: true
            }
        },
        /*{
            $group: {
                _id: '$category',
                count: { $sum: 1 }
            }
        }*/
        {
            $project: {
                title: 1,
                meta: true,
            }
        },
        {
            $sort: {
                title: 1
            }
        },
        {
            $limit: 5
        },
        {
            $skip: 1
        }
    ], (err, result) => {
        if (err)
            res.json(err);
        res.json(result);
    });
});

/* GET aggregate-lookup */
router.get('/aggregate-lookup', (req, res) => {
    Book.aggregate([
        {
            $match: {
                _id: mongoose.Types.ObjectId("5e919b121fc9ed31307057ae")
            }
        },
        {
            $lookup: {
                from: 'users',
                localField: 'userId',
                foreignField: '_id',
                as: 'user'
            }
        },
        {
            $unwind: '$user'
        },
        {
            $project: {
                //user: '$user',
                username: '$user.fullname',
                title: true
            }
        }
    ], (err, result) => {
        if (err)
            res.json(err);
        res.json(result);
    });
});

module.exports = router;
