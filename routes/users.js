import express from "express";

import { createUsers,genPassword } from "../helper.js";
const router = express.Router();




router
    .route("/signup")
    .post(async(request,response)=>{
        //POST Method
        const  {username,password} = request.body;
        const hashedPassword = await genPassword(password);
        const result = await createUsers({username:username,password:hashedPassword});
    
        response.send(result)
    });


export const usersRouter = router;