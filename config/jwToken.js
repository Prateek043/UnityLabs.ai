const jwt=require("jsonwebtoken");

const jwtTokenGenerate=(id)=>{
    const token=jwt.sign({id},process.env.SECRET_KEY,{expiresIn:"3d"});
    return token;
}

module.exports=jwtTokenGenerate;