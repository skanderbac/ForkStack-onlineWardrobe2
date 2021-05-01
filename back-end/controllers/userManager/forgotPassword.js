var User=require('../../model/user');
const jwt=require('jsonwebtoken');
const sendMailer=require('../userManager/sendMailer');
const bcrypt=require('bcryptjs');
const  jwtDecode  = require('jwt-decode');
var forgotPassword={}

forgotPassword.forgotPassword=async(req,res,next)=>{
    try {
        const email=req.body.Email;
       const user=await User.findOne({Email:req.body.Email});
       if(!user) return res.status(400).send("This email does not exist");
       const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
       const url=`http://localhost:3024/resetPassword/${token}`
    sendMailer.forgotPasswordMail(email,url);
    res.send("Resend_Password");
    } catch (err) {
      return res.status(500).json(err.message)  
    }
}

forgotPassword.resendPassword=async(req,res,next)=>{
  const password=req.body.Password;
  const token=req.body.id;
  const salt=await bcrypt.genSalt(10);
  var decodetoken=jwtDecode(token);
  console.log(decodetoken._id);
  const hashedPassword=await bcrypt.hash(req.body.Password,salt);
  user1={
         Password:hashedPassword

  }
  try{
    User.findByIdAndUpdate(decodetoken._id,user1,
    function (err, data) {
      if (err)
          console.log(err);
      res.json(decodetoken._id);
  });
  }catch(err){console.log(err);}
  }


module.exports=forgotPassword;
