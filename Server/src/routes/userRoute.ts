import { Router, Request, Response } from "express";

const userRoute = Router();

userRoute.get("/user", (req: Request, res: Response) => {});

export default userRoute;
