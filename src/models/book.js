import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: String,
    authorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    registerDate: {
        type: Date,
        default: Date.now
    },
});

const Book = mongoose.model('Book',BookSchema);

export default Book