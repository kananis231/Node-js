const express = require("express");
const port = 1008;

const app = express();
const db = require("./config/database");
const crudSchema = require("./model/crudSchema");

app.use(express.urlencoded())

app.set("view engine","ejs");
app.get("/", async(req,res)=>{
 let data = await crudSchema.find({});
    res.render("index",{data});
})
app.post("/insert", async(req,res)=>{
    let data = await crudSchema.create(req.body);
    res.redirect("/");
})

app.get("/delete", async(req,res)=>{
    let data = await crudSchema.findByIdAndDelete(req.query.id);
    res.redirect("/");
})  
app.get("/edit", async(req,res)=>{
    let data = await crudSchema.findById(req.query.id);
    res.render("edit",{data});
})
app.post("/editData", async(req,res)=>{
    let data = await crudSchema.findByIdAndUpdate(req.query.id,req.body);
    res.redirect("/");
}) 
app.listen(port, (err) => {
    err ? console.log(err) : console.log(`server started on port ${port}`);
})