import express from "express";

import {createEducation, getEducation} from "../controllers/educationConntent/educationContent.js"

const educationRoute = express.Router();

educationRoute.post("/create",createEducation)
educationRoute.get("/get", getEducation)
export default educationRoute
