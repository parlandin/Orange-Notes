import userRepositorie from "../repositories/UserRepositorie";
import { hash, genSalt } from "bcrypt";
import { randomBytes } from "crypto";
import getDiffDay from "../utils/getDiffDay";

interface user {
  name: string;
  picture: string;
  id: string;
  last_login: string;
  latest_day: string;
  consecutive_days: number;
  email?: string;
  created_at?: string;
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

  public async deleteUserById(id: number) {
    const { rows } = await userRepositorie.deleteUserById(id);

    return rows;
  }

  public async updateConsecutiveDays(
    last_login: string,
    latest_day: string,
    consecutive_days: number,
    id: number
  ) {
    const { totalDays, totalHours } = getDiffDay(last_login);
    const now = new Date();
    //TODO: criar uma "utils" para isso
    const latestDay = new Date(latest_day).toLocaleDateString();
    const today = new Date().toLocaleDateString();

    if (latestDay == today) {
      await userRepositorie.updateLastLogin(
        now,
        latest_day,
        consecutive_days,
        id
      );
      return consecutive_days;
    }
    const todayInMilliseconds = new Date(latest_day).getTime();

    if (todayInMilliseconds < now.getTime()) {
      if (totalDays <= 1 && totalHours <= 24) {
        const totalIncrement = consecutive_days + 1;
        await userRepositorie.updateLastLogin(now, now, totalIncrement, id);
        return totalIncrement;
      } else {
        await userRepositorie.updateLastLogin(now, now, 1, id);
        return 1;
      }
    }
    //
    await userRepositorie.updateLastLogin(now, now, 1, id);
    return 1;
  }
}

export default new UserService();
