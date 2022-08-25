import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  public async createUser(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    try {
      const data = await UserService.createUser(name, email, password);
      return res.json({ data });
    } catch (err) {
      console.log(err);
      //@ts-ignore
      if (err.code == "23505")
        return res.status(404).json({ error: "Esse email já existe" });
      return res
        .status(201)
        .json({ error: "Ocorreu um erro ao criar usuario" });
    }
  }

  public async getUserByID(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const data = await UserService.getUserById(parseInt(id));

      return res.status(200).json({ data });
    } catch (err) {
      return res
        .status(404)
        .json({ error: "Ocorreu um erro ao carregar usuario" });
    }
  }
}

export default new UserController();
