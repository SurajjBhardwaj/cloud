const express = require("express");
const app=express();
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary").v2;


cloudinary.uploader.upload('monkeyy.webp',{
    public_id:'monkeyy'
})
     .then(uploadResult => console.log(JSON.stringify(uploadResult,null))) 
     if(error => console.log(error));



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("heyyy");
});


app.post("/",(req,res)=>{
    const name = req.body.name;
    console.log(name);
    res.send(name);
})


app.listen(port, () =>{ 
    console.log(process.env.PORT);
    console.log(`Server running on port ${port} 🔥`)});


