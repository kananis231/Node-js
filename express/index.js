const express = require("express");


const app = express();
app.use(express.urlencoded());
var studentData = [
  {
    id: 1,
    name: "suman",
  },
  {
    id: 2,
    name: "khush",
  },
];


app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("index", {
    student: studentData,
  });
});


app.post("/insertData", (req, res) => {
  const { id, name } = req.body;
  let obj = {
    id: id,
    name: name,
  };
  studentData.push(obj);
  res.redirect("/");
});


app.get("/deleteData", (req, res) => {
  const id = req.query.userid;
  const data = studentData.filter((el, i) => {
    return el.id != id;
  });
  studentData = data;
  res.redirect("back");
});


app.post("/editData", (req, res) => {
  const { id, name } = req.body;
  const index = studentData.findIndex(student => student.id == id);
  if (index !== -1) {
    studentData[index].name = name;
  }
  res.redirect("/");
});



app.listen(7867, () => {
  console.log("server listen");
});
