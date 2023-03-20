const Book = require('../model/book');


const getAllBooks = async (req, res, next) => {
    let books;
    try {
        books = await Book.find();
        return res.status(201).json({
            status: "success get all the books",
            books
        })
    }catch(err) {
        return res.json({
            status: "Book not found",
            message: err.message
        })
    }
}

const getById = async (req, res, next) => {
    let book;
    try {
        book = await Book.findOne({_id: req.params.id})
        return res.status(201).json({
            status: "fetch particular book",
            book
        })
    }catch(err) {
        return res.status(500).json({err})
    }
}

const addBooks = async (req, res, next) => {
    console.log(req.body)
    let book;
    try{
        book = await Book.create({
            name: req.body.name,
            author: req.body.author,
            description: req.body.description,
            price: req.body.price,
            available: req.body.available,
            image: req.body.image, 
        })
        res.status(201).json({
            status: "successfully added book",
            book
        })
    }catch(err) {
        return res.status(500).json({
            status: "Unable to add Book",
            message: err.message
        })
    }
}

const updateBook = async (req, res, next) => {
    let book;
    try {
        book = await Book.updateOne({_id: req.params.id}, req.body)
        res.status(200).json({
            status: "successfully updated",
            book:book
        })
    }catch(err) {
        return res.status(500).json({
            status: "Failed to update",
            message: err.message
        })
    }
}

const deleteBook = async (req, res, next) => {
    let book;
    try {
        book = await Book.deleteOne({_id: req.params.id})
        return res.status(201).json({
            status: "successfully deleted",
            book
        })
    }catch(err) {
        return res.status(501).json({
            status: "Not deleted",
            message: err.message
        })
    }
}

exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;