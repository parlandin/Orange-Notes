import { Router } from "express";
import UserController from "../controllers/UserController";

const userRoute = Router();

userRoute.get("/user/logged/:id", UserController.getBasicUserInfo);
userRoute.get("/user/:id", UserController.getUserByID);
userRoute.delete("/user/:id", UserController.DeleteUserById);

export default userRoute;
