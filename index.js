const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');

const processdata = require('./routes/processdata');

app.use(bodyParser.json());
//Import Route
app.use('/data', processdata);

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true },
    () => console.log('connected to database'))
app.listen(3000);