var  mongoose=require('mongoose');
var Schema =mongoose.Schema;
var Product=new Schema({
    image:{
        type:String,
    },
    style:{
        type:String,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
    },
    quantity:{
        type:Number,
    },
    availibility:{
        type:Boolean,
    },
    type:{
        type:String,
    },
    sex:{
        type:String,
    },
    color:[],

});
module.exports =mongoose.model('product',Product);
