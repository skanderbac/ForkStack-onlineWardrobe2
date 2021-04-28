var express = require('express');
var router = express.Router();
var User=require('../model/user')
var joi=require('@hapi/joi');
const { valid } = require('@hapi/joi');
const Joi = require('@hapi/joi');
var index={}

index.postUser=async(req,res)=>{
  var user=new User(
      {FirstName:"Samar",LastName:"Romdhani",Country:"Tunisia",Email:"samar.romdhani1@esprit.tn",
      sex:"women",phone:21
      
  }
  );
  user.save();
  res.send("added");
  };
   //Validation
  const schema=joi.object({
    FirstName:joi.string().required(),
    LastName:joi.string().required(),
    Email:joi.string().required().email(),

    username:joi.string().required(),
    Password:joi.string().required().min(8),
    Country:joi.string().required(),
    Phone:joi.number(),
    sex:joi.string(),

    style:Joi.string(),
    
  });




  ///
  index.postUser1=async(req,res)=>{
    var validation=schema.validate(req.body);
    const {error}=schema.validate(req.body);
 if(error) return res.send(error.details[0].message);
    var user = new User(
        {FirstName: req.body.FirstName,
            LastName:req.body.LastName,
            Country:req.body.Country,
            Password:req.body.Password,
            Email:req.body.Email,
            sex:req.body.sex,
            BirthDate:req.body.BirthDate,
            username:req.body.username,
            phone: req.body.phone}
    );
    try{
       const savedUser=await user.save();
       res.send(savedUser);
    }catch(err){
      res.status(400).send(err);

    }
};

module.exports=index;


