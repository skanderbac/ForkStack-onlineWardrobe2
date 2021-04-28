var  mongoose=require('mongoose');
var Schema =mongoose.Schema;
var User=new Schema({
    Phone:{
        type:Number,
    },
    image:{
        type:String,
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
    BirthDate:{
        type:Date,
    },
    height:{
        type:Number,
    },
    weight:{
        type:Number,
    },
    status:{
        type:String,
    },
    date_of_creation:{
        type:Date,
    },

    
});
module.exports =mongoose.model('user',User);
