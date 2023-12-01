import express from "express";
import { createFact, getFact, deleteFact } from "../controllers/fact/fact.js";


const factRoute = express.Router();

factRoute.post("/createFact",createFact)
factRoute.get("/getFact", getFact)
factRoute.delete("/deleteFact/:id", deleteFact)
export default factRoute
