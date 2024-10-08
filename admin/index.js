const express = require("express");
const db=require("./config/Database");

const cookieParser=require('cookie-parser');

const port = 6099;

const path = require("path")

const AdminSchema=require('./model/AdminSchema')
const session=require("express-session")
const localSt=require('./config/Passport')



const passport=require('passport');

const app = express();
const flashconnect=require('connect-flash');

const connectflash=require('./config/connectflash')
const mailer=require('./config/mailer')



app.use(express.urlencoded());
app.set("view engine","ejs");
app.use(cookieParser());
app.use(flashconnect());

app.use(session({
    name :"demo",
    secret: 'keyboard',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge : 100*100*60 }
  }))

  app.use(passport.initialize());
app.use(passport.session());

const routes = require("./routes/index")
app.use(passport.setAuth)
app.use(connectflash.setflash);


app.use("/",routes)

app.use(express.static(path.join(__dirname , "Public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))



app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server started on ${port}`);
    
});