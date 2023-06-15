const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
let tasks=[];

app.post('/addtask',(req,res)=>{
    const id = Date.now();
    const task ={
        id:id,
        task:req.body.task
    }
    tasks.push(task);
    res.status(200).json(task);
})

app.get('/',(req,res)=>{
    res.send(tasks);
})


app.listen(3000);
