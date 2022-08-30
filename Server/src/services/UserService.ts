import userRepositorie from "../repositories/UserRepositorie";
import { hash, genSalt } from "bcrypt";
import { randomBytes } from "crypto";
import getDiffDay from "../utils/getDiffDay";

interface user {
  name: string;
  picture: string;
  id: string;
  last_login: string;
  consecutive_days: number;
}

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

  public async getUserById(id: number): Promise<user> {
    const { rows } = await userRepositorie.getUserByID(id);

    return rows[0];
  }

  public async updateConsecutiveDays(
    last_login: string,
    consecutive_days: number,
    id: number
  ) {
    const { totalDays, totalHours } = getDiffDay(last_login);
    const now = new Date();

    if (totalDays <= 1 && totalHours <= 24) {
      if (totalDays === 1 && totalHours > 1) {
        const totalIncrement = consecutive_days + 1;
        userRepositorie.updateLastLogin(now, totalIncrement, id);
        return totalIncrement;
      } else {
        userRepositorie.updateLastLogin(now, consecutive_days, id);
        return consecutive_days;
      }
    }

    return 1;
  }
}

export default new UserService();
