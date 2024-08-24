const express = require("express");

const app = express();

const port = 2002;

const db = require('./config/database');
const crudSchema = require('./model/crudschema');

app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.get('/', async (req, res)=>{
    let data = await crudSchema.find({});
    res.render('book', {data});
})

app.post('/bookdata', async (req, res)=>{
    const data = await crudSchema.create(req.body);
    // console.log(book);
    res.redirect("/");
})
app.get('/delete', async (req, res)=>{
    const data = await crudSchema.findByIdAndDelete(req.query.id);
    res.redirect("/");
})
app.get('/edit', async (req, res)=>{
    const data = await crudSchema.findById(req.query.id);
    res.render('update', {data});
})
app.post('/editData', async (req, res)=>{
    const data = await crudSchema.findByIdAndUpdate(req.query.id, req.body);
    res.redirect("/");
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})