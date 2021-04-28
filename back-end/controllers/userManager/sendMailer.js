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
   subject:"Creating Account",
   html:'<h1>Welcome</h1><p>Your account is created in our application,Welcome</p> \n'
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
   +`<a href=${url}>${txt}</a>`
  + '\n <h3> Online Wardrobe team </h3>',
  })
}
module.exports=sendMailer;

