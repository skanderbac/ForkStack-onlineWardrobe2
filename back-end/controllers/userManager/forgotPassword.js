var User=require('../../model/user');
const jwt=require('jsonwebtoken');
const sendMailer=require('../userManager/sendMailer');
var forgotPassword={}

forgotPassword.forgotPassword=async(req,res,next)=>{
    try {
        const email=req.body.Email;
       const user=await User.findOne({Email:req.body.Email});
       if(!user) return res.status(400).send("This email does not exist");
       const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
       const url=`${process.env.CLIENT_URL}/user/reset/${token}`
    sendMailer.forgotPasswordMail(email,url);
    res.send("Resend_Password");
    } catch (err) {
      return res.status(500).json(err.message)  
    }
}



module.exports=forgotPassword;
