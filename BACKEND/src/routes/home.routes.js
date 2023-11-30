import { Router } from "express";
import { ctrlGetAllPosts } from "../controllers/post.controllers.js";

const homeRouter = Router();

homeRouter.get("/", ctrlGetAllPosts);

export { homeRouter };