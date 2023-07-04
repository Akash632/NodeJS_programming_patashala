const express = require('express');
const productModel = require('./productModel.js');
const app = express();
const mongoose = require('mongoose');

app.use(express.json())
const connectDb = async ()=>{
    try{
        const res = await mongoose.connect('mongodb://127.0.0.1:27017/test');
        if(res){
            console.log('connected DB');
        }
    }catch(err){
        console.log(err);
    }
}

connectDb();



app.post('/post',async (req,res)=>{
    const {name,price} = req.body;

    const resp = new productModel({name,price}).save();

    res.send(resp);
})
app.listen(4000,()=>{
    console.log('listening');
})