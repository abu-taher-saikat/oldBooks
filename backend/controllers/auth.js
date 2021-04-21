const User = require('../models/User');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/ErrorResponse');


// @desc   Register user
// @route  POST /api/v1/auth/register
// @access Public
exports.register = asyncHandler(async (req, res, next) => {
    const {
        name,
        email,
        password,
        role
    } = req.body;

    // Create user
    const user = await User.create({
        name,
        email,
        password,
        role
    })

    // Create token
    // const token = user.getSignedJwtToken();
    // res.status(200).json({success : true, token });

    sendTokenResponse(user, 200, res);
})




// @desc Login a user
// @route POST api/v1/auth/login
// @Public
exports.login = asyncHandler(async(req,res, next) => {
    const {email , password } = req.body;

    // validate email and password
    if(!email || !password){
        return next(new ErrorResponse("Please provie an email and password", 401));
    }

    // Check for user
    const user = await User.findOne({
        email : email
    }).select('+password');

    // if no user
    if(!user){
        return next(new ErrorResponse('Invalid credentials', 401))
    }

    // Check if password matchs 
    const isMatch = await user.matchPassword(password);

    if(!isMatch){
        return next(new ErrorResponse('Invalid credentials', 401))
    }

    sendTokenResponse(user, 200, res);
})



// @desc Get current logged in user
// @route POST api/v1/auth/me
// @Public
exports.getMe = asyncHandler(async(req,res, next) => {
    const user = await User.findById(req.user._id);
    console.log(user);
    res.status(200).json({
        success : true,
        data : user
    })
})



// @desc Update user details
// @route PUT api/v1/auth/:id
// @access Public/admin
// @imp email shouldn't be update here.
exports.updateUser = asyncHandler(async(req,res, next) => {
    const fieldsToUpdate = {
        name : req.body.name,
    }
    const user = await User.findByIdAndUpdate(req.params.id, fieldsToUpdate,{
        new : true,
        runValidators : true
    });

    res.status(200).json({
        success : true,
        data : user
    })
})



// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    // Create token
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true
    }
    if (process.env.NODE_ENV === 'production') {
        options.secure = true
    }

    res
        .status(statusCode)
        .cookie('token', token, options)
        .json({
            success: true,
            token
        })
}