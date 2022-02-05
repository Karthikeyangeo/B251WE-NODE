import { client } from "./index.js";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt"; 

//get all movies
 async function getMovies(filter) {
  return await client
    .db("b251we")
    .collection("movies")
    .find(filter)
    .toArray();
}

// get Movies by ID
 async function getMovieByID(id) {
    return await client.db("b251we").collection("movies").findOne({ _id: ObjectId(id) });
  }

// Add movies
 async function createMovies(data) {
    return await client
      .db("b251we")
      .collection("movies")
      .insertMany(data);
  }

// delete Movies by ID
async function deleteMovieByID(id) {
  return await client.db("b251we").collection("movies").deleteOne({ _id: ObjectId(id) });
}

// update Movies by ID
async function updateMovieByID(id,updatedMovie) {
  return await client.db("b251we").collection("movies").updateOne({ _id: ObjectId(id) },{$set:updatedMovie});
}

// Create Movies
async function createUsers(data) {
  return await client
    .db("b251we")
    .collection("users")
    .insertOne(data);
}

async function genPassword(password){
  const salt = await bcrypt.genSalt(10);
  console.log("salt",salt);
  const hashedPassword = await bcrypt.hash(password,salt);
  console.log(hashedPassword);
  return hashedPassword;
}

// get username
async function getUserByName(username) {
  return await client.db("b251we").collection("users").findOne({ username:username });
}
export {
  getMovies,
  getMovieByID,
  createMovies,
  deleteMovieByID,
  updateMovieByID,
  createUsers,
  genPassword,
  getUserByName
};