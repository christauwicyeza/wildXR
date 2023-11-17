import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import "dotenv/config";
import cors from "cors";
import educationRoute from "./routes/education.js"
import authRoute from "./routes/authroute.js";

const app = express();
dotenv.config();

const database = process.env.DB_URL;

mongoose.connect(database).then(()=>{
    app.listen(3000)
    console.log("connected to database on 3000");}).catch((error)=>{
        console.log(error);
    });

    app.use(express.json())
    app.use(cors())
    app.use(educationRoute)
    app.use(authRoute)








