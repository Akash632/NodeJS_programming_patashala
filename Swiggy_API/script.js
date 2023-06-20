const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


let userCredentials = [];

app.post('/signup',(req,res)=>{
    const{name,email,password,phone,address}=req.body;

    if(!name||!email||!password||!phone||!address){
        res.status(200).send({
            message:"Please enter valid details"
        })
    }else{
        userCredentials.push({
            name:name,
            email:email,
            password:password,
            phone:phone,
            address:address
        })
    
        res.status(200).send({
            name:name,
            email:email,
            password:password,
            phone:phone,
            address:address
        })
    }
})
app.listen(5000);
