import express from "express";
import isAuth from "../middlewares/isAuth.js";
import {   generatedemo, getCurrentUser } from "../controllers/user.controller.js";


const router = express.Router();

router.get("/me", isAuth, getCurrentUser);


router.get("/gen",  generatedemo);
export default router;