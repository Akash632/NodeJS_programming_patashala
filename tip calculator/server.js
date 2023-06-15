const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    const{billAmount,serviceQuality,totalPeople}=req.query;
    let tip=(billAmount*serviceQuality)/totalPeople;
    console.log(billAmount,serviceQuality,totalPeople);
    res.status(200).send({tip:tip});
})
app.listen(5000);