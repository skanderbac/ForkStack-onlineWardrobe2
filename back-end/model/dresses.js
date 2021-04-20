var  mongoose=require('mongoose');
var Schema =mongoose.Schema;
var Dresses=new Schema({

    
    image:{
        type:String,
    },
    imagebig: {
        type: String,
    }
});
module.exports =mongoose.model('dresses',Dresses);
