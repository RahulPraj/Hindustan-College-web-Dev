const express = require('express')
const app = express();

// app.use('/lion',(req,res)=>{
//     res.send('<h1>me hun jaadu</h1>')
//     console.log("i am a middleware");
// })

app.get('/cat',(req,res)=>{
 res.send('<h1>i am a cat</h1>')
})

app.listen(8080, ()=>{
    console.log("my  server is connected to port 8080");
})