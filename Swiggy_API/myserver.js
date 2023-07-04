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