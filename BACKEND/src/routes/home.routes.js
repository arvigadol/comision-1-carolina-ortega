import { Router } from "express";
import { ctrlGetAllPosts } from "../controllers/post.controller.js";

const homeRouter = Router();

homeRouter.get("/", ctrlGetAllPosts);

export { homeRouter };