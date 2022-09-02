import { Request, Response, NextFunction } from "express";
import AuthService from "../services/AuthService";
import AuthenticationRequest from "../types/express";

export default function verifyToken(
  req: AuthenticationRequest,
  res: Response,
  next: NextFunction
) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: "autorização invalida" });

  const [type, token] = header.split(" ");
  try {
    if (type !== "Bearer" || !token)
      return res.status(401).json({ message: "Autorização invalida" });

    const [id] = AuthService.checkTokenIsValid(token);
    req.userId = id;
    return next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Autorização invalida" });
  }
}
