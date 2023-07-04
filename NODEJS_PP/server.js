// const http = require('http');

// const server = http.createServer((req,res)=>{
//     switch(req.url){
//         case '/':
//             res.write('<h1>my Root page</h1>');
//             break;
//         case '/about':
//             res.write('<h1>My About Page</h1>');
//             break;
//         default:
//             res.write("404");
//     }
//     res.end();

// });


const express = require('express');

const app = express();


// app.get('/ab?cd',(req,res)=>{
//     res.send("<h1>Hello User</h1>")
// })
// app.get('/ab+out',(req,res)=>{
//     res.send("<h1About User</h1>")
// })
// app.get('*',(req,res)=>{
//     res.send("<h1>404</h1>")
// })

app.get('/page/:id-:num',(req,res)=>{
    console.log(req.params.id);
    res.send(`at page : ${req.params.id} and para ${req.params.num}`);
})

app.listen(8000,()=>{
    console.log('listening to port 8000');
})



