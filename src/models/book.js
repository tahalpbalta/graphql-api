const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: String,
    authorId: String,
});

module.exports = mongoose.model('Book',BookSchema);