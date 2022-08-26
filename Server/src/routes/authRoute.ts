import { Router } from "express";
import UserController from "../controllers/UserController";
import AuthController from "../controllers/AuthController";
import validation from "../middlewares/validation.midlle";
import userSchema from "../validations/userValidation";
import authSchema from "../validations/authValidation";

const authRoute = Router();

authRoute.post(
  "/auth/create",
  validation(userSchema),
  UserController.createUser
);
authRoute.post("/auth", validation(authSchema), AuthController.auth);
authRoute.post("/auth/token", AuthController.checkToken);

export default authRoute;
