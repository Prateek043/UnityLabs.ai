const express=require("express");
const app=express();
const dotenv=require("dotenv");
const bodyparser=require("body-parser");
const dbConnect=require("./config/dbConnection.js");
const userAuth=require("./routes/auth.js");
const buyerRoutes=require("./routes/buyer.js");
const sellerRoutes=require("./routes/seller.js");
const { notFound, errorHandle } = require("./middleware/errorHandler.js");
dotenv.config();
//Connection To Database
dbConnect();

//Middlewares
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

//Routes
app.use("/api/auth",userAuth);
app.use("/api/buyer",buyerRoutes);
app.use("/api/seller",sellerRoutes);

app.use(express.static(__dirname + '/public'));

//Error Handler Middlewares
app.use(notFound);
app.use(errorHandle);

const port=process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(port,()=>{
    console.log(`Server is listining at port no ${port}`);
})