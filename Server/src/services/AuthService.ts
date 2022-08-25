import userRepositorie from "../repositories/UserRepositorie";
import { compare } from "bcrypt";
import Config from "../config/index";
import { sign, verify } from "jsonwebtoken";

class AuthService {
  public async login(email: string, loginPassword: string): Promise<object> {
    const { rows } = await userRepositorie.getUserByEmail(email);

    if (!rows) throw Error("Email ou senha invalido");

    const { password, id, name, picture } = rows[0];
    const isValidPassword = await compare(loginPassword, password);

    if (!isValidPassword) throw Error("Email ou senha invalido");

    //@ts-ignore
    const token = sign({ id }, Config.SECRET_JWT, {
      expiresIn: "1d",
    });

    return { id, name, picture, token };
  }

  public checkTokenIsValid(token: string) {
    //@ts-ignore
    const isValid = verify(token, Config.SECRET_JWT);
    return isValid;
  }
}

export default new AuthService();
