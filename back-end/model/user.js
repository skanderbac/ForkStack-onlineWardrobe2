var  mongoose=require('mongoose');
var Schema =mongoose.Schema;
var User=new Schema({
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
    style:{
        type:String,
    },
    sex:{
        type:String,
    },
    Age:{
        type:Number,
    },
    
});
module.exports =mongoose.model('user1',User);
