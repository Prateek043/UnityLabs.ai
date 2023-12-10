const User=require("../model/UserModel.js");
const Catalog=require("../model/CatalogsModel.js");
const Order=require("../model/OrdersModel.js");
const asyncHandler=require("express-async-handler");
const Product = require("../model/ProductsModel.js");


const createCatlog=asyncHandler(async(req,res)=>{
    try {
        const sellerId = req.user.id; 
        const { catalogName, products } = req.body;

        const existingCatalog = await Catalog.findOne({ seller: sellerId });
    
        if (existingCatalog) {
          products.forEach(async (product) => {
            existingCatalog.products.push(product);
          });
    
          await existingCatalog.save();
          res.status(200).json({ message: 'Products added to the catalog successfully' });
        } else {
          const newCatalog = new Catalog({
            seller: sellerId,
            catalogName,
            products: products,
          });
    
          await newCatalog.save();
          res.status(201).json({ message: 'Catalog created with products' });
        }
      } catch (error) {
        throw new Error("Error creating the catalog or adding products");
      }
})

    const getAllOrder=asyncHandler(async(req,res)=>{
        try {
            const sellerId = req.user.id; 
            const orders = await Order.find({ seller: sellerId });
            const sellerOrders = orders.map((order) => ({
                buyer: order.buyer._id, 
                products: order.products.map((product) => ({
                  id: product.product, 
                  quantity: product.quantity,
                })),
              }));
            
              res.json(sellerOrders);
          } catch (error) {
            throw new Error("Error fetching seller orders");
          }
    })
  


module.exports={createCatlog,getAllOrder};