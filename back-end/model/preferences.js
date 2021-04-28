var  mongoose=require('mongoose');
var Schema =mongoose.Schema;
var Preferences=new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,ref:'user',
    },
    style:{
        type:String,
    },
    color:{
        type:String,
    }, 
    budget:{
        type:Number,
    },
    clothes:{
        type:String,
    },
    choice:{
        type:String,
    },
     
  


});
module.exports =mongoose.model('preferences',Preferences);
