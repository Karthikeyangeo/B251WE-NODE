import express from "express";
const router = express.Router();
import { getMovies ,getMovieByID,createMovies,deleteMovieByID} from "../helper.js";



router.get("/",async(request,response)=>{
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
});

//get by ID
router.get("/:id",async(request,response)=>{
    const {id} = request.params;

    // db.movies.findOne({"id":"105"})
    const movie = await getMovieByID(id);
    console.log(movie);
  
    movie ?  response.send(movie) : response.status(404).send({msg : "Movie not found 😭"});
});

//POST Method
router.post("/",async(request,response)=>{

  const data = request.body;
  console.log("Incoming movies",data)

  const result = await createMovies(data);

  response.send(result)
});

//delete by ID
router.delete("/:id",async(request,response)=>{
    const {id} = request.params;

    // db.movies.findOne({"id":"105"})
    const movie = await deleteMovieByID(id);
    console.log(movie);
  
    movie ?  response.send(movie) : response.status(404).send({msg : "Movie not found 😭"});
});

export const moviesRouter = router;