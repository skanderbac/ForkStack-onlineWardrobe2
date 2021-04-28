var express = require('express');
var User=require('../../model/user');
const  jwtDecode  = require('jwt-decode');
const jwt=require('jsonwebtoken');
var LoginAndRegister={}
LoginAndRegister.googleLogin=async(req,res)=>{
    var name=req.body.name;
    const user=await User.findOne({Email:req.body.email});
    if(!user) return res.status(400).send("Email is wrong");
    const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
    res.header('Authorization',token).send(token);
    console.log(token);
  };
  LoginAndRegister.googleRegister=async(req,res)=>{
    const EmailExists=await User.findOne({Email:req.body.Email});
    if(EmailExists) return res.status(400).send("Email already Exists");

    var user = new User(
        {
            FirstName: req.body.FirstName,
            LastName:req.body.LastName,
            Email:req.body.Email,
            username:req.body.FirstName,
        } 
      );
    
try{
 const savedUser=await user.save();
 const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
  res.header('Authorization',token).send(token);
}catch(err){
res.status(400).send(err);
}
}


  module.exports=LoginAndRegister;