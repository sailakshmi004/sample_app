import cors from 'cors';
import express from 'express';
import { MongoClient } from "mongodb";
const app=express();
app.use(express.json());
app.use(cors());
//check server//
app.get('/',(req,res)=>{
    res.send("server is running")
})