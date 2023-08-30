require('dotenv').config();
require('express-async-errors');
const express = require('express');
// middlewares
const Not_Found = require('./Middlewares/not_found');
const Error_Handler = require('./Middlewares/error_handler')
// controllers
const sendEmail = require('./Controllers/sendEmail')
const app = express();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send(`<h1>Send Email Project <a href='/send'>send</a></h1>`)
})
app.get('/send',sendEmail)
const port = process.env.PORT || 3000;

const start = async () => {    
    app.listen(port, () => console.log(`Listening on port ${port}...`));
};


start();