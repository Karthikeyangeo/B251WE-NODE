import { client } from "./index.js";

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
  
export {getMovies,getMovieByID,createMovies,deleteMovieByID,updateMovieByID};