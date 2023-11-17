import express from "express";
import { signUp, signIn  } from "../controllers/user/authController.js";

const authRoute = express.Router();
authRoute.post("/signup", signUp);
authRoute.post("/signin", signIn);
export default authRoute;