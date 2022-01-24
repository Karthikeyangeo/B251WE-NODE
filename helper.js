import { client } from "./index.js";
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
    return await client.db("b251we").collection("movies").findOne({ "id": id });
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
  return await client.db("b251we").collection("movies").deleteOne({ "id": id });
}

// update Movies by ID
async function updateMovieByID(id,updatedMovie) {
  return await client.db("b251we").collection("movies").updateOne({ "id": id },{$set:updatedMovie});
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
  
export {
  getMovies,
  getMovieByID,
  createMovies,
  deleteMovieByID,
  updateMovieByID,
  createUsers,
  genPassword
};