const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

// env file
dotenv.config({path : './backend/config/.env'});

// database
const connectDB = require('./config/db');


// Connect the database
connectDB();


// Route files 
const auth = require("./routers/auth");


const app = express();


app.use(express.json());

// app.use('/', (req,res)=>{
//     res.send('what the f')
// })

app.use('/api/v1/auth', auth)


const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`App listening  on port ${process.env.NODE_ENV} and port on ${PORT}!`.yellow.bgBlack.bold);
})




