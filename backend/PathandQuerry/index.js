const express = require('express');
const app = express();


app.get('/cat',(req,res)=>{
    console.log(req.query);
    console.log(req.query.naam);
    let {naam} = req.query;
    res.send(`<h1>i am a ${naam} </h1>`);
})

app.get('/r/:anything',(req,res)=>{
    console.log(req.params);
    let {anything} = req.params;
    res.send(`i am ${anything}`);
})

app.listen(8080,()=>{
    console.log("server concected");
})