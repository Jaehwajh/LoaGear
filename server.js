const mongoose = require('mongoose');
const express = require('express');
const MongoStore = require('connect-mongo');
const methodOverride = require('method-override');
const {MongoClient} = require('mongodb');
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash');
const { classEngraving, battleEngravings } = require('./config/properties');
const app = express();

require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '../public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(flash());

require('dotenv').config()

const client = new MongoClient(process.env.DB_STRING);

const connectDB = async() => {
    try{
        await client.connect();
        console.log(`MongoDB Connected!`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

connectDB();

app.listen(process.env.PORT, () =>{
    console.log('Test Build Online')
});


// Array Options

app.get('/get-options', async(req, res) => {
    const allEngravings = classEngraving.concat(battleEngravings);
    res.json(allEngravings);
});

app.post('/save-option', async(req, res) => {
    const { selectedOptions } = req.body;
    try{
        
    }
})