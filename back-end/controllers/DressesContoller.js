var express = require('express');
var Dresses=require('../model/dresses');
var DressesController={};

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
    var dress = new Dresses(
        req.body
    );
    try{
        const savedDress =await dress.save();

    }catch(err){
        res.status(400).send(err);
    }
};


DressesController.delete=async(req,res)=>{
    User.deleteOne({_id:req.params.id})
        .then(function(){
            console.log("Data deleted");
        }).catch(function(error){
        console.log(error);
    });
}


module.exports=DressesController;
