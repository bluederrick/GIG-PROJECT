const express = require('express');
var bodyParser = require('body-parser')
const router = require('./Routes/user.js')
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('Dotenv').config();

// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json())


const mongoose = require('./config/Database.js');


app.use('/api', router)
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT} ...`);
});



