const express = require('express');
const app = express();
const path = require('path');
const Blog = require('./models/blog');
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/AppBlog')
.then(()=>{
    console.log("db connected");
}).catch(()=>{
    console.log("db not connected")
})


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));


// task1 -> display all the blogs
app.get('/blogs',async(req,res)=>{

    let allBlogs = await Blog.find({});
    res.render('index', {allBlogs});
})


app.listen(8080, ()=>{
    console.log("server is connected to port 8080")
})