import express from "express";

import {createEducation, getEducation, updateEducation,oneEducation} from "../controllers/educationConntent/educationContent.js"

const educationRoute = express.Router();

educationRoute.post("/create",createEducation)
educationRoute.get("/get", getEducation)
educationRoute.get("/getOneEducation/:id", oneEducation)
educationRoute.patch("/update/:id", updateEducation)
export default educationRoute
