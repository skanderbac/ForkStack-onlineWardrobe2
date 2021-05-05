var  mongoose=require('mongoose');
var Schema =mongoose.Schema;
var Wardrobe=new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,ref:'user',
    },
    image:{
        type:String,
    },
    description: {
        type: String,
    },
    size:{
        type: String,
    },
    type:{
        type: String,
    }
});
module.exports =mongoose.model('wardrobe',Wardrobe);
