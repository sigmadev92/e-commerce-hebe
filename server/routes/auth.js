import express from "express";
import users from "../models/user.js";
const router = express.Router();

router.post('/register',async(req,res)=>{
    console.log(req.body);
    console.log("register route fetched");
    const user = await users.findOne({email: req.body.email});
    
    if(user){
        console.log("Email already registered");
        return res.send({
            success : false,
            message : "THIS EMAIL IS ALREADY ASSOCIATED WITH AN ACCOUNT",
        });
    }

    const newUser = await users(req.body);
    newUser.save();
    return res.send({
        success : true,
        message : "Registration Successful",
    })
});

router.post('/login',async(req,res)=>{
    console.log(req.body);
    console.log("Login route fetched");
    const user = await users.findOne({email: req.body.email});
    console.log(user);
    if(!user){
        
        return res.send({
            success : false,
            message : "Email not found",
        });
    }
    if(req.body.password === user.password){
        return res.send({
            success : true,
            token : user._id,
            userData : user,
        })
    }
    return res.send({
        success : false,
        message : "INVALID PASSWORD"
    })
     

});

router.get('/auth',async(req,res)=>{
    console.log(req.headers);
    console.log("Auth route fetched");
    const user = await users.findOne({_id:req.headers.authorization});
    console.log(user);
    if(user){
        
        return res.send({
            success : true,
            userData : user,
        });
    }
    return res.send({
        success:false,
    })
   
    
     

});
export default router;