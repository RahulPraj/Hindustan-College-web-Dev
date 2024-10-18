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
app.use(express.urlencoded({extended:true}));

// task1 -> display all the blogs
app.get('/blogs',async(req,res)=>{

    let allBlogs = await Blog.find({});
    res.render('index', {allBlogs});
})

// show form
app.get('/blog/new',(req,res)=>{
    res.render('new');
})

// add data in db
app.post('/blogs',(req,res)=>{
    let {title, author, comment} = req.body;
    let newBlog = Blog.create({title, author, comment});
    res.redirect('/blogs');
})

app.listen(8080, ()=>{
    console.log("server is connected to port 8080")
})