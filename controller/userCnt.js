const jwtTokenGenerate = require("../config/jwToken.js");
const User=require("../model/UserModel.js");
const asyncHandler=require("express-async-handler");


//Register a user Controller
const createUser=asyncHandler(async(req,res)=>{
    const {username,email,password,userType}=req.body;
    const user=await User.findOne({email});
    if(user)
    {
       throw new Error("User already Existed");
    }
    else{
        const newUser=await User.create(req.body);
        res.status(201).json({ message: 'User registered successfully' });
    }
});

//Login a User

const loginController=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(user && await user.isPasswordMatched(password))
    {
        res.json({
            _id:user?._id,
            username:user?.username,
            email:user?.email,
            mobile:user?.mobile,
            token:jwtTokenGenerate(user?._id),
        });
    }
    else{
        throw new Error("Invalid Credentials");
    }
});




module.exports={createUser,loginController};