const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    //title: String,
    title: {
        type: String,
        required: true,
        maxlength: [20, '`{PATH}` ({MAXLENGTH}) karakterden (`{VALUE}`) fazla olamaz!'],
        minlength: [5, '`{PATH}` ({MINLENGTH}) karakterden (`{VALUE}`) az olamaz!']
        // unique: true,
    },
    //published: Boolean,
    published: {
        type: Boolean,
        default: false,
    },
    comments: [{ message: String }],
    year: {
        type: Number,
        max: 2030,
        min: 1700
    },
    meta: {
        votes: Number,
        favs: Number
    },
    publishedAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('book', BookSchema);