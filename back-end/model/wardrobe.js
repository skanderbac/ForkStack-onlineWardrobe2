var  mongoose=require('mongoose');
var Schema =mongoose.Schema;
var Wardrobe=new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,ref:'user1',
        
    },
    style:{
        type:String,
    },
    image:{
        type:String,
    },
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    color:{
        type:String,
    },
    
    clothes:[
        {
        size:String,
        color:String,
        image:String,
        }],

    
});
module.exports =mongoose.model('wardrobe',Wardrobe);