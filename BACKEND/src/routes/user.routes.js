import { Router } from "express";
import { ctrlDeleteUser, ctrlGetAllUsers, ctrlGetOneUser, ctrlUpdateUser } from "../controllers/user.controller.js";
import { updateUserValidations } from "../models/validations/user.validations.js";

const userRouter = Router();

userRouter.get("/", ctrlGetAllUsers);
userRouter.get("/:userId", ctrlGetOneUser);
userRouter.patch("/:userId", updateUserValidations, ctrlUpdateUser);
userRouter.delete("/:userId", ctrlDeleteUser);

export { userRouter };