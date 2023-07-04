const {format :ft} = require('date-fns');
const {v4:uuid} = require('uuid');
const fs = require('fs').promises;
const oldFs = require('fs');
const path = require('path');

const logEvents = async (message,filename,type='INFO')=>{
    const date_time = ft(new Date(),'yyyy-MM-dd\tHH:mm:ss');
    const id = uuid();
    const new_entry = `${date_time}\t${id}\t${filename}\t${message}\n`;
    try{
        if(!oldFs.existsSync(path.join(__dirname,'logs','dev_logs.txt'))){
            await fs.mkdir(path.join(__dirname,'logs'));
            await fs.writeFile(path.join(__dirname,'logs','dev_logs.txt'),"");
        }
        fs.appendFile(path.join(__dirname,'logs','dev_logs.txt'),new_entry);
        console.log("I have added a log");
    }
    catch(err){
        console.log(err);
    }
}
module.exports = {logEvents};