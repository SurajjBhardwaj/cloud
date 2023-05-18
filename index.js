import express from 'express';
import bodyParser from 'body-parser';

const app=express();
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


