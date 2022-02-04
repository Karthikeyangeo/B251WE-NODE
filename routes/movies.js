import express from "express";
const router = express.Router();
import { getMovies ,getMovieByID,createMovies,deleteMovieByID,updateMovieByID} from "../helper.js";
import {auth} from '../middleware/auth.js';


router
    .route("/")
    .get(async(request,response)=>{
        console.log(request.query);
        const{language,rating} = request.query;
    
        const filter = request.query;

        //To change the rating to number
        if(filter.rating){
        filter.rating = +(filter.rating)
        }
        const movies = await getMovies(filter);
        console.log(movies);
        
        response.send(movies)
    })
    .post(async(request,response)=>{
        //POST Method
        const data = request.body;
        console.log("Incoming movies",data)
    
        const result = await createMovies(data);
    
        response.send(result)
    });

router
    .route("/:id")
    .get(async(request,response)=>{
        //get by ID
        const {id} = request.params;

        // db.movies.findOne({"id":"105"})
        const movie = await getMovieByID(id);
        console.log(movie);
    
        movie ?  response.send(movie) : response.status(404).send({msg : "Movie not found 😭"});
    })
    .delete(async(request,response)=>{
        //delete by ID
        const {id} = request.params;
        

        // db.movies.deleteOne({"id":"105"})
        const movie = await deleteMovieByID(id);
        console.log(movie);
    
        movie ?  response.send(movie) : response.status(404).send({msg : "Movie not found 😭"});
    })
    .put(async(request,response)=>{
        //update by ID
        const {id} = request.params;
        const updatedMovie = request.body;

        // db.movies.updateOne({"id":"105"},{$set:updatedMovie})
        const movie = await updateMovieByID(id,updatedMovie);
        console.log(movie);
    
        movie ?  response.send(movie) : response.status(404).send({msg : "Movie not found 😭"});
    });
export const moviesRouter = router;