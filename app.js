const express = require('express');
const bodyParser = require('body-parser');
const db= require('./db/mongoDB');

const app =express();
app.use(bodyParser.urlencoded({extended : true}));

//fungsi Post
app.post('/crud',(req,res)=>{
    let crud = new db.crud();
    crud.nama =req.body.nama;
    crud.lat =req.body.lat;
    crud.long =req.body.long;
    crud.save((err,post)=>{
        if(err){
            console.log(err);
        }else{
            res.json(post);
        }
    });
});

//fungsi Get
app.get('/crud',(req,res)=>{
    db.crud.find({}).then((post) => {
        res.json(post);
    });
});

//fungsi Delete
app.delete('/crud',(req,res)=>{
    db.crud.deleteMany((err,post)=>{
        res.json(post);
    });
});

//fungsi Update
app.put('/crud',(req,res)=>{
    db.crud.update({_id:id},req.body).then((post)=>{
        res.json(post);
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Aplikasi berjalan pada port " + port);
});