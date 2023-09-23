const mongoose = require('mongoose');
const express = require('express');
const methodOverride = require('method-override');
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash');
const app = express();

require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '../public'));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(flash());

require('dotenv').config()

const client = new MongoClient(process.env.DB_STRING);

const connectDB = async() => {
    try{
        await mongoose.connect(client, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
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


