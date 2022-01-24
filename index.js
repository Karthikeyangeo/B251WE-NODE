//express code

// const express = require('express'); //common js
// const { MongoClient } = require('mongodb');//common js
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
import {moviesRouter} from "./routes/movies.js";  
import { usersRouter } from "./routes/users.js";
import bcrypt from "bcrypt"; 

dotenv.config();  // getting all env keys from here
// console.log(process.env)
const app = express();

//Middleware concept
//app.use -> Intercept every request

app.use(express.json()); //Every request is parsed as JSon.


const MONGO_URL = process.env.MONGO_URL;  // url hidden from git repo

async function createConnection(){
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("MongoDB Connector")
  return client;
}
export const client = await createConnection(); //allowed only in "type":"module"
// const PORT =9001;
const PORT = process.env.PORT;  // port will be automatically assigned by heroku 
app.get("/",(request,response)=>{
    response.send("Hello ,🌏😍😍");
})

app.use("/movies",moviesRouter);  // Whenever movies is coming, it will be routed to moviesRouter
app.use("/users",usersRouter);    // For signup and login
app.listen(PORT,()=>console.log('The server is started at',PORT));


