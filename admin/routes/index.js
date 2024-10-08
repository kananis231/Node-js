const express = require("express");
const routes = express.Router();


const adminctl = require("../controllers/adminctl");
const passport=require('passport');

// const passport=require('../config/Passport')

const multer=require('multer');

const Storage=multer.diskStorage({
  destination : (req,file,cb)=>{
    cb(null,"uploads/")
  },
  filename : (req,file,cb)=>{
    cb(null,file.fieldname+"-"+Date.now());
  }
})

const Uploadspic=multer({storage:Storage}).single("img")


// get method //

routes.get("/",adminctl.Login)
routes.get("/table",adminctl.table)
routes.get("/dashboard",adminctl.dashboard)
routes.get("/AddForm",adminctl.AddForm)
routes.get("/ViewForm",adminctl.ViewForm)
routes.get("/deletedata",adminctl.deletedata)
routes.get("/editdata",adminctl.editdata)
routes.get("/logout",adminctl.Logout)
routes.get("/changepass",adminctl.changepass);


// post method //

routes.post("/insserdata",Uploadspic,adminctl.insserdata);
routes.post("/updatedata",Uploadspic,adminctl.updatedata)
routes.post("/userlogin",passport.authenticate("local",{failureRedirect : "/"}),adminctl.userlogin);
routes.post("/newpass",adminctl.newpass)
routes.post("/forgetpass",adminctl.forgetpass)
routes.post("/checkOtp",adminctl.checkOtp)



module.exports = routes; 