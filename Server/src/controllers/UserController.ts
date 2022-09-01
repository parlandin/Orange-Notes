import { Request, Response } from "express";
import UserService from "../services/UserService";
import AuthenticationRequest from "../types/express";

class UserController {
  public async createUser(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    try {
      const data = await UserService.createUser(name, email, password);
      return res.json(data);
    } catch (err) {
      console.log(err);
      //@ts-ignore
      if (err.code == "23505")
        return res.status(400).json({ error: "Esse email já existe" });
      return res
        .status(500)
        .json({ error: "Ocorreu um erro ao criar usuario" });
    }
  }

  public async getUserByID(
    req: AuthenticationRequest,
    res: Response
  ): Promise<Response> {
    const { id } = req.params;

    if (!req.userId || req.userId != parseInt(id)) {
      return res.status(401).json({ message: "Você não tem permissão" });
    }

    try {
      const data = await UserService.getUserById(parseInt(id));
      return res.status(200).json(data);
    } catch (err) {
      return res
        .status(404)
        .json({ error: "Ocorreu um erro ao carregar usuario" });
    }
  }

  public async getBasicUserInfo(
    req: AuthenticationRequest,
    res: Response
  ): Promise<Response> {
    const { id } = req.params;

    if (!req.userId || req.userId != parseInt(id)) {
      return res.status(401).json({ message: "Você não tem permissão" });
    }

    try {
      const data = await UserService.getUserById(parseInt(id));
      const {
        id: user_id,
        picture,
        name,
        last_login,
        latest_day,
        consecutive_days,
      } = data;

      const days = await UserService.updateConsecutiveDays(
        last_login,
        latest_day,
        consecutive_days,
        parseInt(id)
      );

      return res
        .status(200)
        .json({ user_id, picture, name, consecutive_days: days });
    } catch (err) {
      return res
        .status(404)
        .json({ error: "Ocorreu um erro ao carregar usuario" });
    }
  }
}

export default new UserController();
