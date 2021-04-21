var express = require('express');
var router = express.Router();
const multer=require('multer');
const fs=require('fs');
var Wardrobe=require('../model/wardrobe');
var WardrobeController={}
WardrobeController.index=async (req, res, next)=>{
    res.render('index', { title: 'Express' });
  };
 var storage=multer.diskStorage({
   destination:function(req,file,callback) {
     var dir="./uploads";
     if(!fs.existsSync(dir)){
       fs.mkdirSync(dir);
     }
     callback(null,dir); 
   },
   filename:function(req,file,callback){
     callback(null,file.originalname);
   }
 });


//var multer =multer({storage:storage}).array('files',12);

  WardrobeController.addWardrobe=async(req,res,next)=>{
    console.log(req.file);

    const user=await Wardrobe.findOne({user_id:req.body.user_id});
    if(user) return res.status(400).send("Wardrobe Created");
       var wardrobe=new Wardrobe(
     {user_id:req.body.user_id,
     description:req.body.description, 
     color:req.body.color,
     style:req.body.style,
     clothes:req.body.clothes,
     image:req.body.images
    }
    );
    try{
      const savedWardrobe=await wardrobe.save();
      res.status(200).send('added');
    }catch(err){
      res.status(400).send(err);

    }
  };
  WardrobeController.createWardrobe=async(req,res,next)=>{
    console.log(req.file);
    const user=await Wardrobe.findOne({user_id:req.body.user_id});
    if(user) return res.status(400).send("Wardrobe Created");
       var wardrobe=new Wardrobe(
     {user_id:req.body.user_id,
     description:req.body.description, 
     color:req.body.color,
     style:req.body.style,
     clothes:req.body.clothes
    }
    );
    try{
      const savedWardrobe=await wardrobe.save();
      res.status(200).send('added');
    }catch(err){
      res.status(400).send(err);

    }
  };

module.exports=WardrobeController;