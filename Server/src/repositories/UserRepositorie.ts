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
    consecutive_days: number,
    id: number
  ) {
    const query =
      "UPDATE users SET last_login = $1, consecutive_days = $2 WHERE users.id = $3;";
    return db.query(query, [today, consecutive_days, id]);
  }
}

export default new UserRepositorie();
