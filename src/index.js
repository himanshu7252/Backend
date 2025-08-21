// require('dotenv').config({path: './env'});

import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";

import dotenv from "dotenv";

dotenv.config({
    path: './env'
})




connectDB();











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