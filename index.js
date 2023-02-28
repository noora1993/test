const express = require("express");
const app = express();

app.use(express.json());

app.post('/login',(req,res)=>{
    const username =req.body.username;
    const password =req.body.password;
    
    //res.json({name:username,password:password})
    res.send("You have logged in successfully!")
})

app.get('/home',(req,res)=>{

    res.send("Hello Noora!")
})

app.listen(3001,()=>{
    console.log("connected to port 3001")
})