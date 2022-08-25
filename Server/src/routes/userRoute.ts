import { Router, Request, Response } from "express";

const userRoute = Router();

userRoute.get("/user/:id", (req: Request, res: Response) => {});
userRoute.delete("/user/:id", (req: Request, res: Response) => {});

export default userRoute;
