import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors({
    origin : 'http://localhost:3000',
}))

app.use(bodyParser.urlencoded({extended:true}));
app.listen(PORT,()=> console.log("BACKEND SURVER RUNNING AT http://localhost:"+PORT));
app.get('/',(req,res)=>{
    res.send("BACKEND SERVER REACHED");
});

