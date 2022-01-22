//express code

// const express = require('express'); //common js
// const { MongoClient } = require('mongodb');//common js
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

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
const client = await createConnection(); //allowed only in "type":"module"
const PORT =9001;
app.get("/",(request,response)=>{
    response.send("Hello ,🌏😍😍");
})

app.get("/movies",async(request,response)=>{
    console.log(request.query);
    const{language,rating} = request.query;
  
    const filter = request.query;

    //To change the rating to number
    if(filter.rating){
      filter.rating = +(filter.rating)
    }
    const movies = await client
    .db("b251we")
    .collection("movies")
    .find(filter)
    .toArray();
    console.log(movies);
    
    response.send(movies)
});

app.get("/movies/:id",async(request,response)=>{
    const {id} = request.params;

    // db.movies.findOne({"id":"105"})
    const movie = await client.db("b251we").collection("movies").findOne({"id":id});
    console.log(movie);
  
    movie ?  response.send(movie) : response.status(404).send({msg : "Movie not found 😭"});
});

//POST Method
app.post("/movies",async(request,response)=>{

  const data = request.body;
  console.log("Incoming movies",data)

  const result = await client
    .db("b251we")
    .collection("movies")
    .insertMany(data);

  response.send(result)
});

app.listen(PORT,()=>console.log('The server is started at',PORT));