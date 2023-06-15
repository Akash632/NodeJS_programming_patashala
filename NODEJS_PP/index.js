const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send("API is working...")
})

app.post('/add',(req,res)=>{
    const a = req.body.num1;
    const b = req.body.num2;
    res.send({"sum":a+b})
})
app.post('/subract',(req,res)=>{
    const a = req.body.num1;
    const b = req.body.num2;
    res.send({"sum":a-b})
})
app.post('/multiply',(req,res)=>{
    const a = req.body.num1;
    const b = req.body.num2;
    res.send({"sum":a*b})
})
app.post('/divide',(req,res)=>{
    const a = req.body.num1;
    const b = req.body.num2;
    res.send({"sum":a/b})
})
app.listen(port,()=>{
    console.log('listening on port');
})