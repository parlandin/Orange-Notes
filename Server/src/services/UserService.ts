import userRepositorie from "../repositories/UserRepositorie";
import { hash, genSalt } from "bcrypt";
import { randomBytes } from "crypto";

class UserService {
  public async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<object> {
    //foto de perfil temporaria
    const randomSeed = randomBytes(6).toString("base64url");
    const randomPicture = `https://avatars.dicebear.com/api/croodles-neutral/${randomSeed}.svg`;

    const defaultSalt = 10;
    const salt = await genSalt(defaultSalt);
    const cryptPassword = await hash(password, salt);

    const { rows } = await userRepositorie.createUser(
      name,
      email,
      randomPicture,
      cryptPassword
    );

    return rows[0];
  }

  public async getUserById(id: number): Promise<object> {
    const { rows } = await userRepositorie.getUserByID(id);

    return rows[0];
  }
}

export default new UserService();
