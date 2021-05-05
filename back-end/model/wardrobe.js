var  mongoose=require('mongoose');
var Schema =mongoose.Schema;
var Wardrobe=new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,ref:'user',
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
    size:{
        type:String,
    },
});
module.exports =mongoose.model('wardrobe',Wardrobe);