

import bodyParser from "body-parser";
import cors from "cors"
import {randomBytes} from "crypto"
import {} from "dotenv/config"
import express , {Router} from "express"

const app = express();

app.use(cors());
app.use(bodyParser.json());

const commentsByPostId={}
app.get("/posts/:id/comments",(req,res)=>{

    const response = commentsByPostId[req.params.id]|| [];

    res.status(200).send(response)



})

app.post("/posts/:id/comments",(req,res)=>{

    const commentId= randomBytes(4).toString("hex");
    const {content} = req.body;

    const comments = commentsByPostId[req.params.id] ||[];
    comments.push({commentId,content});

    commentsByPostId[req.params.id]= comments;

    res.status(201).send({message:"Comment added"})

  
})

const PORT = process.env.PORT||4002;

app.listen(PORT, err =>{
    if(err) console.log(err.message);

    else console.log(`server listening to port:${PORT} `)
})