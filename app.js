const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const hbs = require('hbs');



//start from here....................................................................................................
//use path module
const path = require('path');
//use bodyParser middleware
const bodyParser = require('body-parser');
//end here...........................................................................................................

const app = express();

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/key').MongoURI;


// Connect to MongoDB
mongoose.connect(db ,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


//Setting handlebars as view engine..................................................................................

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
//app.engine('ejs', require('hbs').__express); 


// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index.js'));
app.use('/user', require('./routes/user.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

