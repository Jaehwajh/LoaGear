const mongoose = require('mongoose');
const express = require('express');
const methodOverride = require('method-override');
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash');
const logger = require("morgan");
const app = express();

//App view 
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(methodOverride("_method"));

require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

// Dot env config
require('dotenv').config();

// Database
const database = process.env.DB;

const connectDB = async() => {
    try{
        await mongoose.connect(database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log(`MongoDB Connected!`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

connectDB();

// app.use(flash());
app.listen(process.env.PORT, () => {
    console.log("Test build online")
});