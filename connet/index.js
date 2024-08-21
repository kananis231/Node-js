const express = require("express");
const port = 1008;

const app = express();
const db = require("./config/database");
const crudSchema = require("./model/crudSchema");

app.use(express.urlencoded())
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index");
})
app.post("/insert",(req,res)=>{
    console.log(req.body);
})
app.listen(port, (err) => {
    err ? console.log(err) : console.log(`server started on port ${port}`);
})