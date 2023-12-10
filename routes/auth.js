const express=require("express");
const {createUser,loginController} = require("../controller/userCnt");
const router=express.Router();

router.post("/register",createUser);
router.post("/login",loginController);

module.exports=router;