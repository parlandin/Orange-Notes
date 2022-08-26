import { Request, Response } from "express";
import AuthService from "../services/AuthService";

class AuthController {
  public async auth(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    try {
      const data = await AuthService.login(email, password);
      return res.json(data);
    } catch (err) {
      console.log(err);
      return res.status(401).json({ error: "Email ou senha invalido" });
    }
  }

  //mudar para validations, temporario
  public checkToken(req: Request, res: Response) {
    const { token } = req.body;

    if (!token)
      return res.status(401).json({ message: "Autorização invalida" });

    try {
      AuthService.checkTokenIsValid(token);

      return res.status(200).json({ message: "valido" });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ message: "token invalido" });
    }
  }
}

export default new AuthController();
