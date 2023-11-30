import { Router } from "express";
import { ctrlCreateComment, ctrlDeleteComment, ctrlGetAllComments, ctrlGetOneComment, ctrlUpdateComment } from "../controllers/comment.controllers.js";
import { createCommentValidations, getAllCommentsValidations, getOneCommentValidations, updateCommentValidations } from "../models/validations/comment.validations.js";

const commentRouter = Router();

commentRouter.get("/:postId", getAllCommentsValidations, ctrlGetAllComments);
commentRouter.post("/:postId", createCommentValidations, ctrlCreateComment);
commentRouter.get("/:postId/:commentId", getOneCommentValidations, ctrlGetOneComment);
commentRouter.patch("/:postId/:commentId", updateCommentValidations, ctrlUpdateComment);
commentRouter.delete("/:postId/:commentId",ctrlDeleteComment);

export { commentRouter };