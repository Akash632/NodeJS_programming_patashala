const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(cors());

let userCredentials = [
  {
    name:"Akash",
    email:"akash@gmail.com",
    password:"12345",
    phone:"9052777513",
    address:"India"
  }
];

// fs.readFile('data.json',(err,data)=>{
//   if(err) console.log(err)
//   else console.log(data.toString());
// })

let data = {
  "name":"Akash",
  "email":"akash@gmail.com",
  "password":"12345",
  "phone":"9052777513",
  "address":"India"
}


fs.appendFile('data.json',JSON.stringify(data),(err)=>{
  if(err) console.log(err)
  else console.log("Done");
})

app.post("/signup", (req, res) => {
  const { name, email, password, phone, address } = req.body;

  let filteredData = userCredentials.filter(({ email }) => (email = email));
  console.log(filteredData);

  if (!name || !email || !password || !phone || !address) {
    res.send({
      message: "Please enter valid details",
    });
  } else if (filteredData.length > 0) {
    res.send("User already exists");
  } else {
    userCredentials.push({
      name: name,
      email: email,
      password: password,
      phone: phone,
      address: address,
    });

    res.status(200).send({
      name: name,
      email: email,
      password: password,
      phone: phone,
      address: address,
    });
  }
});

app.post('/login',(req,res)=>{
  const{email,password}=req.body;
  let user = userCredentials.filter((value)=>value.email===email);
  console.log(user.length);
  if(!email||!password){
    res.send({messaage:"please give proper details"})
  }
  else if(user.length===0){
    res.send({message:"Email is not registered"})
  }
  else{
    if(user[0].password !== password){
      res.send({message:"Password in valid"});
    }
    else{
      res.send({Message:"Login successful"});
    }
  }

})
app.listen(5000);
