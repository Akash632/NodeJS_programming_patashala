//fs module

// var fs = require("fs");

// fs.readFile('index.html',(err,data)=>{
//     if(err) console.log(err);
//     else console.log(data);
// })


const {logEvents} = require('./utility/logger.js');


logEvents("This is my log",__filename);