const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary");
const ejs = require("ejs");


const app = express();
const PORT = process.env.PORT;

app.set('ejs','view engine');

app.listen(PORT,()=>{
    console.log(`server is running at https://localhost:${PORT}`);
})