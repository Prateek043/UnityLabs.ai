const mongoose=require("mongoose");

const dbConnect=async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Database Connected Successfully");
    }
    catch(error)
    {
        console.log("Database Error");
    }
}
module.exports=dbConnect;