import { Router } from "express";
import UserController from "../controllers/UserController";
import AuthController from "../controllers/AuthController";

const authRoute = Router();

authRoute.post("/auth/create", UserController.createUser);
authRoute.post("/auth", AuthController.auth);
authRoute.post("/auth/token", AuthController.checkToken);

export default authRoute;
