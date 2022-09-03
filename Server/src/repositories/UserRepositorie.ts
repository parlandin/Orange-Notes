import db from "../db";
import { QueryResultRow } from "pg";

class UserRepositorie {
  public async createUser(
    name: string,
    email: string,
    picture: string,
    password: string
  ): Promise<QueryResultRow> {
    const query =
      "INSERT INTO  users (name, email, picture, password) VALUES ($1, $2, $3, $4) RETURNING id, name, picture;";

    return db.query(query, [name, email, picture, password]);
  }

  public async getUserByID(id: number): Promise<QueryResultRow> {
    const query = "SELECT * from users WHERE id = $1;";
    return db.query(query, [id]);
  }

  public async getUserByEmail(email: string): Promise<QueryResultRow> {
    const query = "SELECT * from users WHERE email = $1;";
    return db.query(query, [email]);
  }

  public async updateLastLogin(
    today: Date,
    latest_day: string | Date,
    consecutive_days: number,
    id: number
  ) {
    const query =
      "UPDATE users SET last_login = $1, latest_day = $2 , consecutive_days = $3 WHERE users.id = $4;";
    return db.query(query, [today, latest_day, consecutive_days, id]);
  }

  public async deleteUserById(id: number) {
    const query = "DELETE  FROM users WHERE id = $1  RETURNING *";

    return db.query(query, [id]);
  }
}

export default new UserRepositorie();
