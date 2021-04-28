const { preferences } = require('@hapi/joi');
var express = require('express');
const  jwtDecode  = require('jwt-decode');
var  preferencesController={}
var preference=require('../model/preferences');
preferencesController.getting=async (req, res, next)=>{
    res.render('index', { title: 'sousoiu' });
  };

preferencesController.addPreferences=async(req,res)=>{
  var token =req.header('Authorization');
  var decodetoken=jwtDecode(token);
  const verifyUser=await preference.findOne({user_id:decodetoken._id})
  if(verifyUser) return res.status(400).send("Preference for user is setted");

  var Preferences=new preference(
    {
      user_id:decodetoken._id,
      style:req.body.style,
      color:req.body.color,
      budget:req.body.budget,
      choice:req.body.choice,
      clothes:req.body.clothes

    });
    try{
      const savedpref=await Preferences.save();
      res.send("Prefernces Added");
   }catch(err){
     res.status(400).send(err);

   }
};
preferencesController.updatePreference=async(req,res)=>{
  var token =req.header('Authorization');
  var decodetoken=jwtDecode(token);
  const pref=await preference.findOne({user_id:decodetoken._id})
  try{
    preference.findByIdAndUpdate(pref._id,req.body,
    function (err, data) {
      if (err)
          console.log(err);
      res.send("updated");
  });
  }catch(err){console.log(err);}
  }
  //Return Only Oneuser Preferences
  preferencesController.getUserPreferences=async(req,res)=>{
    var token =req.header('Authorization');
    var decodetoken=jwtDecode(token);
    const PreferencesUser=await preference.findOne({user_id:decodetoken._id})
    .then(prefenrencesUser=>{res.status(200).json(prefenrencesUser)})
    .catch(error=>{res.status(400).json(error)})

  }
  module.exports=preferencesController;