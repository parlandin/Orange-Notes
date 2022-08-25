import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  public async createUser(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const data = await UserService.createUser(name, email, password);
    res.json({ data });
  }
}

export default new UserController();
