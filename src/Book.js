const { v4: uuid } = require('uuid');

class Book {
    constructor(title = '', authors = '', description = '', favorite = false, fileCover = '', fileName = '', fileBook = '', id = uuid()) {
        this.title = title;
        this.authors = authors;
        this.description = description;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.fileBook = fileBook;
        this.id = id;
    }
}

module.exports = Book