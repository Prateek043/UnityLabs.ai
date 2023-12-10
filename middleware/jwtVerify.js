const User=require("../model/UserModel.js");
const jwt=require("jsonwebtoken");
const asyncHandler=require("express-async-handler");

const jsonwebtokenverify=asyncHandler(async(req,res,next)=>{
    let token;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token=req.headers.authorization.split(" ")[1];
        try{
            if(token)
            {
                const decode=jwt.verify(token,process.env.SECRET_KEY);
                const user=await User.findById(decode?.id);
                req.user=user;
                next();
            }
        }
        catch(err){
            throw new Error("Token Expired,Please login");
        }
    }
    else{
        throw new Error("No Token is in The header");
    }
})

const isSeller=asyncHandler(async(req,res,next)=>{
    const {email}=req.user;
    const user=await User.findOne({email})
    if(user.userType!=="seller")
    {
        throw new Error("You have no Authorized permission");
    }
    else{
        next();
    }
})


module.exports={jsonwebtokenverify,isSeller};