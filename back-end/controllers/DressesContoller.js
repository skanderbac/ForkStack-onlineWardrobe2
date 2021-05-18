var express = require('express');
var Dresses=require('../model/dresses');
var DressesController={};
const  jwtDecode  = require('jwt-decode');
DressesController.getAll=
    async (req, res, next)=>{
        res.render('index', { title: 'Express' });
    };

DressesController.getDresses=async(req,res)=>{
    const dresses=Dresses.find()
        .then(dresses=>{res.status(200).json(dresses)})
        .catch(error=>{res.status(400).json(error)})
};

DressesController.add=async(req,res)=>{
    try {

        req.body.user_id=jwtDecode(req.body.user_id);
        console.log(req.body)
        const doc = await Dresses.create(req.body);
    
        res.status(201).json({
          status: "success",
          data: doc
         
        });
      } catch (error) {

      }
    }

DressesController.delete=async(req,res)=>{
    Dresses.deleteOne({_id:req.params.id})
        .then(function(){
            console.log("Data deleted");
        }).catch(function(error){
        console.log(error);
    });
}


module.exports=DressesController;
