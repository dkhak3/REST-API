const mongoose = require("mongoose");

const authorShema = new mongoose.Schema({
  name: {
    type: String,
  },
  year: {
    type: Number,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  publishedData: {
    type: String,
  },
  genres: {
    type: [String],
  },
  // nói về 1 cái obj khác `mongoose.Schema.Types.ObjectId`
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});

// Author liên kết tới Book, ngược lại
let Book = mongoose.model("Book", bookSchema);
let Author = mongoose.model("Author", authorShema);
module.exports = { Book, Author };
