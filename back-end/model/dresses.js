var  mongoose=require('mongoose');
var Schema =mongoose.Schema;
var Dresses=new Schema({
    
    image:{
        type:String,
    },
    description: {
        type: String,
    }
});
module.exports =mongoose.model('dresses',Dresses);
