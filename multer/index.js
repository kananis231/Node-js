const express = require("express");
const port = 2008;
const path = require("path");
const multer = require("multer");
const app = express();
const db = require("./config/database")
const crudSchema = require("./model/crudSchema");

app.use(express.urlencoded());
app.use("/uploads",express.static(path.join(__dirname, "/uploads")));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage}).single("image");
app.set("view engine","ejs");

app.get("/", async(req,res)=>{
 let data = await crudSchema.find({});
    res.render("index",{data});
})

app.post("/insert", upload, async(req,res)=>{
    req.body.image = req.file.path;
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
app.post("/editData", upload, async(req,res)=>{
    let data = await crudSchema.findById(req.query.id);
    let image = "";
    if(req.file){
        req.body.image = req.file.path;
    }else{
        req.body.image = image;
    }
    let data2 = await crudSchema.findByIdAndUpdate(req.query.id,req.body);
    res.redirect("/");
}) 
app.post("/upload", async(req,res)=>{
    let data = await crudSchema.findByIdAndUpdate(req.query.id,req.body);
    res.redirect("/");
})
app.listen(port, (err) => {
    err ? console.log(err) : console.log(`server started on port ${port}`);
})