import express from 'express'
import mongoose from 'mongoose';
import ejs from 'ejs';
import path from 'path';
import multer from 'multer';

// set Storage Engine

const storage = multer.diskStorage({
  destination:'./public/uploads/',
  filename: function (req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage
}).single('myImage');


const app = express();

app.set("view engine", 'ejs');

app.use(express.static('./public'));

app.get("/", (req, res)=>{
  res.render("Index")
});

app.post("/upload", (req, res)=>{
  upload(req, res, (err)=>{
     if(err){
       res.render("Index", {
         msg: err
       })
     }else{
       console.log(req.file);
       res.send('test')
     }
  })
});


app.listen(4000, ()=>{
  console.log('the server is up at port 4000')
})