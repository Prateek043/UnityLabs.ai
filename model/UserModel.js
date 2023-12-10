const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    userType:{
        type:String,
        require:true,
    }
},{
    timestamps:true,
})

//password hash Middleware
UserSchema.pre("save",async function(next){
    const salt=await bcrypt.genSaltSync(10);
    this.password=await bcrypt.hash(this.password,salt);
})
//password matched middleware
UserSchema.methods.isPasswordMatched=async function (Enteredpass){
    return await bcrypt.compare(Enteredpass,this.password);
}

//Export the model
module.exports = mongoose.model('User', UserSchema);