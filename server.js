import express from 'express'
import mongoose from 'mongoose';
import ejs from 'ejs';
import path from 'path';
import multer from 'multer';


const app = express();

app.set("view engine", 'ejs');

app.use(express.static('./public'));

app.get("/", (req, res)=>{
  res.render("Index")
})


app.listen(4000, ()=>{
  console.log('the server is up at port 4000')
})