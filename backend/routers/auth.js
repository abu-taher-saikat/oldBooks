const express = require('express');
const { login, register, getMe, updateUser }  = require('../controllers/auth');

const router = express.Router();


const {protect} = require('../middleware/auth');


router.route('/:id').put(protect, updateUser);
router.route('/me').get(protect, getMe);
router.route('/login').post(login);
router.route('/register').post(register);


module.exports = router;