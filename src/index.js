// require('dotenv').config({path: './env'});

import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";

import dotenv from "dotenv";

dotenv.config({
    path: './env'
})




connectDB()
.then(()=> {
    app.on("error", (error)=> {
        console.log("error found", error);
        throw error;
    })
    app.listen(process.env.PORT || 8000,()=> {
        console.log(`Server is running at PORT ${process.env.PORT }`)
    })
    app.on
})
.catch((error)=> {
    console.errror("MONGODB connection failed", error)
})











/*  this is first approach to connect to mongodb using mongoose
import express from "express";

const app = express();


;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.error("Error", error);
            throw error
        })
        app.listen (process.env.PORT, () => {
             console.log(`Server is opening at PORT {process.env.PORT}`);
        })
    } catch (error){
        console.error("Error", error);
    }
 })()  //this ()() is called IFI to execute the function immediately
*/