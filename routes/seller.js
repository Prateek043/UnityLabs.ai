const express=require("express");
const {createCatlog,getAllOrder}=require("../controller/sellerController");
const {jsonwebtokenverify,isSeller} = require("../middleware/jwtVerify");
const router=express.Router();

router.post("/createCatlog",jsonwebtokenverify,isSeller,createCatlog);
router.get("/orders",jsonwebtokenverify,isSeller,getAllOrder);

module.exports=router;