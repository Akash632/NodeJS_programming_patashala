const express = require('express');
const connectdb = require('./db/connectdb');
const authRoute = require('./routes/authRoute');

const app = express();
app.use(express.json());
app.use('/home',authRoute);


connectdb();

app.listen(3000,()=>{
    console.log('listening on port 3000');
})


app.get('/getOrders',async (req,res)=>{
    const emailId = req.body;
    let result = await db.collection('orders').find({"$sort":})
})
