var express = require('express');
var product=require('../model/product');
var preferencesController=require('./preferencesController');
var preference=require('../model/preferences');

const  jwtDecode  = require('jwt-decode');
const user = require('../model/user');

var productController={};
//Get all thes Shop clothes
productController.getProducts=async(req,res)=>{
    var products=product.find()
    .then(products=>{res.status(200).json(products)})
    .catch(error=>{res.status(400).json(error)})

};
//Add Clothes to the Shop
productController.addProducts=async(req,res)=>{
    //if(req.body.availibility!="yes" ||req.body.availibility!="no") {
    //return res.status(400).send("Availability should be yes or no");}
    var Product=new product({
        style:req.body.style,
        type:req.body.type,
        price:req.body.price,
        quantite:req.body.quantite,
        availibility:req.body.availibility,
        color:req.body.color,
        size:req.body.size,
        image:req.file.filename,
        description:req.body.description,
    });
    try{
        const savedProduct=await Product.save();
        res.send("Product Added to the shop");
     }catch(err){
       res.status(400).send(err);
  
     }

}
//Products Acording the user preferences
productController.getUsserPref=async(req,res)=>{
    var token =req.header('Authorization');
    var decodetoken=jwtDecode(token)
    const verifypreferences=await preference.findOne({user_id:decodetoken._id});
    const User=await user.findOne({_id:decodetoken._id});
    console.log(User);
    var products=product.find({style:verifypreferences.style,
      price:{$lte:verifypreferences.budget},sex:"women"}).
    then(products=>{res.status(200).send(products)})
    .catch(error=>{res.status(400).json(error)});
  };
   

//Return the type of Products
productController.getProductType=async(req,res)=>{
  var products=product.aggregate([{$group:{_id:"$type",description:{$push:"$description"},
                                          style:{$push:"$style"},price:{$push:"$price"},
                                          image:{$push:"$image"},color:{$push:"$color"},
                                          quantity:{$push:"$quantity"},Number:{$sum:1}}}]).sort({_id:1})
  //var products=product.aggregate([{$group:{_id:"$type"}}],{type:true})
  .then(products=>{res.status(200).send(products)})
  .catch(error=>{res.status(400).json(error)});

};
//Retyrn The style of The Products
productController.getProductStyle=async(req,res)=>{
  var products=product.aggregate([{$group:{_id:"$style",description:{$push:"$description"},
                                          style:{$push:"$type"},price:{$push:"$price"},
                                          image:{$push:"$image"},color:{$push:"$color"},
                                          quantity:{$push:"$quantity"},Number:{$sum:1}}}]).sort({_id:1})
  //var products=product.aggregate([{$group:{_id:"$type"}}],{type:true})
  .then(products=>{res.status(200).send(products)})
  .catch(error=>{res.status(400).json(error)});

};
//FilterProduct Accoording the product type
productController.filterProduct=async(req,res)=>{
  var products=product.find({type:req.params.type}).
  then(products=>{res.status(200).send(products)})
  .catch(error=>{res.status(400).json(error)});
};
//FilterProduct Accoording the product type
productController.filterProductStyle=async(req,res)=>{
  var products=product.find({style:req.params.style}).
  then(products=>{res.status(200).send(products)})
  .catch(error=>{res.status(400).json(error)});
};

//FilterProduct Accoording the product Size
productController.filterProductSize=async(req,res)=>{
  var products=product.find({size:req.params.size}).
  then(products=>{res.status(200).send(products)})
  .catch(error=>{res.status(400).json(error)});
};
//FilterProduct Accoording the product sex
productController.filterProductSex=async(req,res)=>{
  var products=product.find({sex:req.params.sex}).
  then(products=>{res.status(200).send(products)})
  .catch(error=>{res.status(400).json(error)});
};


module.exports=productController;
