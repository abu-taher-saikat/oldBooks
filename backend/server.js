const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');


dotenv.config({path : './backend/config/.env'});


const app = express();

app.use('/', (req,res)=>{
    res.send('what the f')
})


const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`App listening  on port ${process.env.NODE_ENV} and port on ${PORT}!`.yellow.bold);
})




