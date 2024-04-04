import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRouter from './routes/auth.js';
import users from './models/user.js';
import mongoose from 'mongoose';
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors({
    origin : 'http://localhost:3000',
}))
mongoose.connect("mongodb+srv://devanshofficial2000:BLOODbank123@cluster0.ftwhjhe.mongodb.net/hebe").then(()=>console.log("DATABASE COnnected with Express")).catch(err=> console.log(err));
 
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(PORT,()=> console.log("BACKEND SURVER RUNNING AT http://localhost:"+PORT));
app.get('/',(req,res)=>{
    res.send("BACKEND SERVER REACHED");
});

app.use('/users',userRouter);

