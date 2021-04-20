const Books = require('../models/Books');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/ErrorResponse');
const { findByIdAndRemove } = require('../models/Books');


// @desc   createBooks
// @route  POST /api/v1/books/create
// @access Public
exports.createBooks = asyncHandler(async (req, res, next) => {
    const {title, description, price} = req.body;

    const books = await Books.create({
        title, description, price
    });

    if(!books){
        return next(new ErrorResponse('no books is here', 404))
    }

    res.status(201).json({
        success : true,
        count : books.length,
        books
    })
})

// @desc   get all books
// @route  GET /api/v1/books/
// @access Public
exports.getAllBooks = asyncHandler(async (req, res, next) => {
    const books = await Books.find();

    if(!books){
        return next(new ErrorResponse('no books found', 404))
    }

    res.status(201).json({
        success : true,
        books
    })
})


// @desc   get a book by id
// @route  GET /api/v1/books/:id
// @access Public
exports.getBooksById = asyncHandler(async (req, res, next) => {
    const bookId = req.params.id;

    const books = await Books.findById(bookId);

    if(!books){
        return next(new ErrorResponse('no books found with this id', 404))
    }

    res.status(201).json({
        success : true,
        books
    })
})


// @desc   update a book by id
// @route  PUT /api/v1/books/:id
// @access Public
exports.updateBooksById = asyncHandler(async (req, res, next) => {

    const booksId = await Books.findById(req.params.id);
    // console.log(booksId);

    const books = await Books.findByIdAndUpdate(booksId, req.body,{
        new : true,
        runValidators : true
    })

    console.log(books);


    if(!books){
        return next(new ErrorResponse('no books found with this id', 404))
    }

    res.status(201).json({
        success : true,
        books
    })
})




// @desc   delete a book by id
// @route  DELETE /api/v1/books/:id
// @access Public
exports.deleteBooksById = asyncHandler(async (req, res, next) => {
    const books = await Books.findById(req.params.id);

    if(!books){
        return next(new ErrorResponse('no books found with this id', 404))
    }

    books.remove()

    res.status(201).json({
        success : true,
        books : {}
    })
})
