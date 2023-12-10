const User=require("../model/UserModel.js");
const asyncHandler=require("express-async-handler");
const Catalog=require("../model/CatalogsModel.js");
const Order=require("../model/OrdersModel.js");
const listOfUser=asyncHandler(async(req,res)=>{
    try{
        const listofseller=await User.find({
            userType:"seller"
        });
        res.json(listofseller);
    }
    catch(err){
        throw new Error("Something Went Wrong");
    }
});

 const listofcatlog=asyncHandler(async(req,res)=>{
    try {
        const sellerId = req.params.seller_id;
        const catalog = await Catalog.findOne({ seller: sellerId })
        if (!catalog) {
          return res.status(404).json({ message: 'Catalog not found for the specified seller' });
        }
        res.json(catalog.products);
      } catch (error) {
        throw new Error("Error retrieving the catalog");
      }
 })
  

 const orderPlaced=asyncHandler(async(req,res)=>{
    const buyerId = req.user.id; 
    const sellerId = req.params.seller_id;
    const { products } = req.body;
try{
  const order = await Order.create({
    buyer: buyerId,
    seller: sellerId,
    products: products,
  });
  res.status(201).json({ message: 'Order created successfully' });
}catch(error)
{
  throw new Error("Error while placing order");
}
})


module.exports={listOfUser,listofcatlog,orderPlaced};