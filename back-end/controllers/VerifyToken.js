const jwt=require('jsonwebtoken');
function auth(req,res,next){
    const token=req.header('Authorization');
    if(!token) return res.status(401).send('accessDeneied');
    try{
   const verified=jwt.verify(token,process.env.TOKEN_SECRET);
   req.user=verified;
   next();
    }catch(err){
        res.status(400).send('auth-token');
        
    }
}
module.exports=auth;