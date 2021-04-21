
var  mongoose=require('mongoose');
var Schema =mongoose.Schema;
var Userr=new Schema({
    Phone:{
        type:Number,
    },
    FirstName: {
        type:String,
        required:true,
        
    },
    LastName:{
        type:String,
                required:true,
        
    },
    Password:{
        type:String,
        required:true,
        
    },
    Country: String,
    Email: {
        type:String,
        required:true,
        
    },
    
    username:{
        type:String,
        required:true,
        
    },
    sex1:String,
    style:{
        type:String,
    },
    
    sty:String,
});

module.exports =mongoose.model('user',Userr);
