const User = require('../models/User');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../middleware/error');


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

    // Create user
    const user = User.create({
        name, email , password, role
    })

    sendTokenResponse(user, 200, res);
})


// Get token from model , create cookie ans send response

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