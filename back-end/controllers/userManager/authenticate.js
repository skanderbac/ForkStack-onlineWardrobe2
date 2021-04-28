const google=require('googleapis');
const {OAuth2Client}=google.Auth;
const  jwtDecode  = require('jwt-decode');
const jwt=require('jsonwebtoken');

var User=require('../../model/user');
const OAUTH_PLAYGROUND ='https://developers.google.com/oauthplayground'
var authenticate={}

const AOUTH=new OAuth2Client(
        process.env.MAILING_SERVICE_CLIENT_ID
    )
    authenticate.googleRegister=async(req,res)=>{
      const tokenId=req.body.tokenId
      const verify=await AOUTH.verifyIdToken({
        idToken:tokenId,audience:"224688907368-fpdv128j9kb8e78c3qaal8nso19u2v69.apps.googleusercontent.com"})
        console.log(verify.getPayload().given_name);
        const EmailExists=await User.findOne({Email:verify.getPayload().email});

        if(EmailExists) return res.status(400).send("Email already Exists");
        const {given_name,family_name,email}=verify;
        var user = new User(
          {
              FirstName:verify.getPayload().given_name,
              LastName:verify.getPayload().family_name,
              Email:verify.getPayload().email,
              username:verify.getPayload().given_name
          } 
        );
        try{
          const savedUser=await user.save();
          const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
           res.header('Authorization',token).send(token);
         }catch(err){
         res.status(400).send(err);
         }
         }
         authenticate.googleLogin=async(req,res)=>{
          const tokenId=req.body.tokenId
          const verify=await AOUTH.verifyIdToken({
            idToken:tokenId,audience:"224688907368-fpdv128j9kb8e78c3qaal8nso19u2v69.apps.googleusercontent.com"});
            const user=await User.findOne({Email:verify.getPayload().email});
            if(!user) return res.status(400).send("Email is wrong");
            const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
            res.header('Authorization',token).send(token);
            console.log(token);
          };

      
  
    module.exports=authenticate;