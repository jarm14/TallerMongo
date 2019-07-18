const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const app = express()

const { setRoutes } = require('./routes');



//middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'));

setRoutes(app);


module.exports = app