import { Router, Request, Response } from "express";
import userController from "../controllers/userController";

const authRoute = Router();

authRoute.post("/auth/create", userController.createUser);
authRoute.post("/auth", (req: Request, res: Response) => {});
authRoute.post("auth/token", (req: Request, res: Response) => {});

export default authRoute;
