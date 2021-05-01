const nodemailer=require('nodemailer');
const google=require('googleapis');
const {OAuth2Client}=google.Auth;
const OAUTH_PLAYGROUND ='https://developers.google.com/oauthplayground';
var sendMailer={}


sendMailer.forgotPasswordMail=async(Email,url,txt)=>{
  const tarnsport=nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth:{
      user : `${process.env.EMAIL_ADRESS}`,
      pass : `${process.env.EMAIL_PASSWORD}`
    

  }
})
 await tarnsport.sendMail({
   from:`${process.env.EMAIL_ADRESS}`,
   to:Email,
   subject:"Reset Password",
   html:'<h1>Welcome</h1>Use the link to reset your password \n'
   +`<a href=${url}>ResetPassword</a>`
  + '\n <h3> Online Wardrobe team </h3>',
  })
}
sendMailer.sendMail=async(Email)=>{
  const tarnsport=nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth:{
      user : `${process.env.EMAIL_ADRESS}`,
      pass : `${process.env.EMAIL_PASSWORD}`
    

  }
})
 await tarnsport.sendMail({
   from:`${process.env.EMAIL_ADRESS}`,
   to:Email,
   subject:"Creating Account",
   html:'<h1>Welcome</h1><p>Your account is created in our application,Welcome</p> \n'
  + '\n <h3> Online Wardrobe team </h3>',
  })
}
sendMailer.googleLogin=async(Email)=>{
  const tarnsport=nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth:{
      user : `${process.env.EMAIL_ADRESS}`,
      pass : `${process.env.EMAIL_PASSWORD}`
    

  }
})
 await tarnsport.sendMail({
   from:`${process.env.EMAIL_ADRESS}`,
   to:Email,
   subject:"Welcome",
   html:'<p>You are Logged In With Your google account</p> \n'
  + '\n <h3> Online Wardrobe team </h3>',
  })
}
sendMailer.facebookLogin=async(Email)=>{
  const tarnsport=nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth:{
      user : `${process.env.EMAIL_ADRESS}`,
      pass : `${process.env.EMAIL_PASSWORD}`
    

  }
})
 await tarnsport.sendMail({
   from:`${process.env.EMAIL_ADRESS}`,
   to:Email,
   subject:"Creating Account",
   html:'<p>Your You are logged In with your facebook Account</p> \n'
  + '\n <h3> Online Wardrobe team </h3>',
  })
}
module.exports=sendMailer;

