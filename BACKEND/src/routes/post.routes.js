import { Router } from "express";
import { ctrlCreatePost, ctrlDeletePost, ctrlGetOnePost, ctrlUpdatePost } from "../controllers/post.controller.js";
import { createPostValidations, getOnePostValidations, updatePostValidations } from "../models/validations/post.validation.js";

const postRouter = Router();

postRouter.post("/", createPostValidations, ctrlCreatePost);
postRouter.get("/:postId", getOnePostValidations, ctrlGetOnePost)
postRouter.patch("/:postId", updatePostValidations, ctrlUpdatePost);
postRouter.delete("/:postId", ctrlDeletePost);

export { postRouter };