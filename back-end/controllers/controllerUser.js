var express = require('express');
var router = express.Router();
var User=require('../model/user')
var joi=require('@hapi/joi');
const { valid } = require('@hapi/joi');
const Joi = require('@hapi/joi');
const jwt=require('jsonwebtoken');
const { JSONCookie } = require('cookie-parser');
const bcrypt=require('bcryptjs');
var dateFormat = require("dateformat");
const { GoogleAuth } = require('google-auth-library');
const {google} =require('googleapis');
const  jwtDecode  = require('jwt-decode');
const { response } = require('../app');
const preference=require('../model/preferences');
var sendMailer=require('../controllers/userManager/sendMailer');
var controllerUser={}
  const schema=joi.object({
    FirstName:joi.string().required(),
    LastName:joi.string().required(),
    Email:joi.string().required().email(),
    username:joi.string().required(),
    Password:joi.string().required().min(8),
    Country:joi.string().required(),
    Phone:joi.number(),
    sex:joi.string(),
    Age:joi.number(),
    image:joi.string(),
    status:Joi.string(),
    height:Joi.number(),
    weight:Joi.number(),
    birthDate:Joi.date()
    
  });
  //Get All The Users
  controllerUser.getUser=async(req,res)=>{
    const user1=User.find()
    .then(users=>{res.status(200).json(users)})
    .catch(error=>{res.status(400).json(error)})
 
  }
  //Register
controllerUser.register=async(req,res)=>{
    var validation=schema.validate(req.body);
    const {error}=schema.validate(req.body);
 if(error) return res.send(error.details[0].message);
 //Checking if the email exist or not
 const EmailExists=await User.findOne({Email:req.body.Email});
 if(EmailExists) return res.status(400).send("Email already Exists");
 //Hash the password
const salt=await bcrypt.genSalt(10);
const hashedPassword=await bcrypt.hash(req.body.Password,salt);
if(!req.file){
    var user = new User(
        {
            FirstName: req.body.FirstName,
            LastName:req.body.LastName,
            Country:req.body.Country,
            Password:hashedPassword,
            Email:req.body.Email,
            sex:req.body.sex,
            style:req.body.style,
            BirthDate:req.body.BirthDate,
            username:req.body.username,
            Phone: req.body.Phone,
            date_of_creation:dateFormat(Date.now())

        }
    );
      }else{
         var user = new User(
          {FirstName: req.body.FirstName,
              LastName:req.body.LastName,
              Country:req.body.Country,
              Password:hashedPassword,
              Email:req.body.Email,
              sex:req.body.sex,
              style:req.body.style,
              BirthDate:req.body.BirthDate,
              username:req.body.username,
              Phone: req.body.Phone,
              date_of_creation:dateFormat(Date.now(), "fullDate"),

              image:req.file.filename
            }
      );
          }
    try{
       const savedUser=await user.save();
       console.log(user);
       sendMailer.sendMail(user.Email);
       const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
       res.header('Authorization',token).send(token);
    }catch(err){
      res.status(400).send(err);

    }
};
//Login
const LogSchema=joi.object({
    Email:joi.string().required().email(),
    Password:joi.string().required().min(8),
    
})
controllerUser.login=async(req,res)=>{
   // var validation=LogSchema.validate(req.body);
    const {error1}=LogSchema.validate(req.body);
 if(error1) return res.send(error1.details[0].message);
 //Checking if the User exists
 const user=await User.findOne({Email:req.body.Email});
 if(!user) return res.status(400).send("Email is wrong");
 //Checking If Password is correct
 const validPassword=await bcrypt.compare(req.body.Password,user.Password);
 if(!validPassword) return res.status(400).send("Password is wrong");
//create JWT Token
sendMailer.googleLogin(user.Email);

const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
res.header('Authorization',token).send(token);
};
//Update The user
controllerUser.Update=async(req,res)=>{
  var token =req.header('Authorization');
  var decodetoken=jwtDecode(token);
  if(!req.file){
   user1={
    sex:req.body.sex,
    weight:req.body.weight,
    height:req.body.height,
    status:req.body.status,
    BirthDate:req.body.BirthDate
  }
  }else{
     user1=
     {
      sex:req.body.sex,
      status:req.body.status,
      height:req.body.height,
      weight:req.body.weight,
      BirthDate:req.body.BirthDate,
      image:req.file.filename
    }
  }
  try{
  User.findByIdAndUpdate(decodetoken._id,user1,
  function (err, data) {
    if (err)
        console.log(err);
    res.json(decodetoken._id);
});
}catch(err){console.log(err);}
}


//Delete User Connected
controllerUser.deleteUser=async(req,res)=>{
  var token =req.header('Authorization');
  var decodetoken=jwtDecode(token);
  console.log(decodetoken._id);
 const prf=await preference.findOne({user_id:decodetoken._id});
console.log(prf);
  User.deleteOne({_id:decodetoken._id})
  .then(function(){
    res.send("Deleted Suceed");
}).catch(function(error){
res.send("User d'ont deleted");
});
preference.deleteOne({user_id:decodetoken._id})
.then(function(){
  res.send("Deleted Suceed");
}).catch(function(error){
res.send("User d'ont deleted");
});
}
controllerUser.googleLogin=async(req,res)=>{
  var name=req.body.name;
  const user=await User.findOne({Email:req.body.email});
  if(!user) return res.status(400).send("Email is wrong");
  const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
  res.header('Authorization',token).send(token);
  console.log(token);

}
controllerUser.profile=async(req,res)=>{
  var token =req.header('Authorization');
  var decodetoken=jwtDecode(token);
  console.log(decodetoken);
  const user1=User.findOne({_id:decodetoken._id})
    .then(users=>{res.status(200).json(users);})
    .catch(error=>{res.status(400).json(error)})
 
  }

module.exports=controllerUser;

