const express = require('express');
const { createBooks, getBooksById ,updateBooksById, deleteBooksById, getAllBooks }  = require('../controllers/books');

const router = express.Router();


const {protect} = require('../middleware/auth');


router.route('/').get(getAllBooks);
router.route('/create').post(protect, createBooks);
router.route('/:id').get(getBooksById).put(updateBooksById).delete(deleteBooksById)


module.exports = router;