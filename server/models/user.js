import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
         
        type: String
    },
    email : {
        
        type: String
    },
    phone : String,
    password :{
        
        type : String
        
    }
    
          
      
})

const users = mongoose.model("users",userSchema);

export default users;