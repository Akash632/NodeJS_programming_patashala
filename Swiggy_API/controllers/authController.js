const userModel = require("../models/userModel")

const signUpController = async (req,res) =>{
    try{
        const {name,email,password,phone,address} = req.body;

        if(!name||!email||!password||!phone||!address){
            return res.status(404).send({
                message:"Please enter valid details"
            })
        }

        const existingUser = await userModel.findOne({email:email});
        if(existingUser){
            // return res.status(200).send({
            //     message:"Email Id already exists!!"
            // })
            return res.send(existingUser)
        }

        const user = await new userModel({
            name,email,password,phone,address
        }).save();

        res.status(200).send({
            message:"User registered successfully"
        })
    }catch(err){
        res.status(500).send({
            message:"Internal server error",
            err
        })
    }
}

module.exports = signUpController;