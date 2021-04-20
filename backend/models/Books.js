const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const BookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Please add a title']
    },
    description : {
        type : String,
        required : [true, 'Please add an Description']
    },
    price : {
        type : Number,
        default : 0
    },
    image : {
        type : String,
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})


module.exports = mongoose.model('Book', BookSchema);