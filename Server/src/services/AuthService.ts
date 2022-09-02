import userRepositorie from "../repositories/UserRepositorie";
import { compare } from "bcrypt";
import Config from "../config/index";
import { sign, verify, decode } from "jsonwebtoken";
import UserService from "./UserService";

class AuthService {
  public async login(email: string, loginPassword: string): Promise<object> {
    const { rows } = await userRepositorie.getUserByEmail(email);

    if (!rows.length) throw Error("Email ou senha invalido");

    const {
      password,
      id,
      name,
      picture,
      last_login,
      latest_day,
      consecutive_days,
    } = rows[0];
    const isValidPassword = await compare(loginPassword, password);

    if (!isValidPassword) throw Error("Email ou senha invalido");

    //TODO: organizar essa parte de services e controllers
    const days = await UserService.updateConsecutiveDays(
      last_login,
      latest_day,
      consecutive_days,
      parseInt(id)
    );

    //@ts-ignore
    const token = sign({ id }, Config.SECRET_JWT, {
      expiresIn: "1d",
    });

    return { id, name, picture, token, consecutive_days: days };
  }

  public checkTokenIsValid(token: string) {
    //@ts-ignore
    const isValid = verify(token, Config.SECRET_JWT);
    //@ts-ignore
    const { id } = decode(token, Config.SECRET_JWT);

    return [id, isValid];
  }
}

export default new AuthService();
