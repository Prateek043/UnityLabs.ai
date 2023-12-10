const express=require("express");
const {listOfUser,listofcatlog,orderPlaced}=require("../controller/buyerController");
const {jsonwebtokenverify,isAdmin} = require("../middleware/jwtVerify");
const router=express.Router();

router.get("/list-of-seller",jsonwebtokenverify,listOfUser);
router.get("/seller-catalog/:seller_id",jsonwebtokenverify,listofcatlog);
router.post("/create-order/:seller_id",jsonwebtokenverify,orderPlaced);


module.exports=router;