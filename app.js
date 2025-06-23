const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', require('./routes/users'));

module.exports = app;