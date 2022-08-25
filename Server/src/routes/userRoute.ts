import { Router, Request, Response } from "express";
import UserController from "../controllers/UserController";

const userRoute = Router();

userRoute.get("/user/:id", UserController.getUserByID);
userRoute.delete("/user/:id", (req: Request, res: Response) => {});

export default userRoute;
