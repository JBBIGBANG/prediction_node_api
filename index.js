const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');

const processdata = require('./routes/processdata');

app.use(bodyParser.json());
//Import Route
app.use('/data', processdata);
app.get('', (req, res)=> {
    res.send("Wow")
})

// mongoose.connect(
//     process.env.DB_CONNECTION,
//     {useNewUrlParser: true },
//     () => console.log('connected to database'))
app.listen(5000);