require('dotenv').config()
const express        = require("express");
const path           = require("path");
const logger         = require("morgan");
const cookieParser   = require("cookie-parser");
const bodyParser     = require("body-parser");
const cors           = require("cors");



// Routes

const item            = require("./routes/item");

const app             = express();


// Mongoose configuration
const mongoose = require("mongoose");
mongoose.connect(process.env.mongoURL)
  .then(console.log(`Connected to ${process.env.mongoURL}`))

// Session


var corsOptions = {
  origin: true,
  credentials: true
};
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public')));

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api/item', item);


app.all('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = app;
