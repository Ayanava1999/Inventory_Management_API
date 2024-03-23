const { userModel } = require("../Model/UserModel");
const { allres } = require("../Utils/allres");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

exports.createuser=async(req,res)=>{
        try{
        const sameuser = await userModel.findOne({email:req.body.email})
        const samedepart = await userModel.findOne({department:req.body.department,ugpg:req.body.ugpg,semester:req.body.semester})
        if(samedepart){
            return res.status(400).send("This department already register");
        }else{
        if(sameuser){
            return res.status(400).send("Already register");
        }else{
            const user = await userModel.create(req.body);
            const token = await user.getToken();
            res.header("auth",token).status(200).send(token)  
        }
    }
    }catch(err){
        res.status(400).send("error occured")
    }
 
}

exports.loginuser = async(req,res)=>{
    console.log(req.body);
    try{
        const userdata = await userModel.findOne({email:req.body.email})
        if(!userdata){
            return res.status(400).send("Craete new account")
        }
        const isPassword = await bcrypt.compare(req.body.password, userdata.password)
        if(isPassword){
            const token = await userdata.getToken();
            res.status(200).header("auth",token).send(token)
        }else{
            res.status(400).send("Wrong password")
        }
    }catch(err){
        res.status(400).send("error occured")
    }
}