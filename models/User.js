import mongoose from "mongoose";


const userSchema = new  mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    }
    
    });
    export default new mongoose.model('User',userSchema);