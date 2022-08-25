import db from "../db";
import { QueryResult } from "pg";

class UserRepositorie {
  public async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<QueryResult> {
    const query =
      "INSERT INTO  usuarios (name, email, password) VALUES ($1, $2, $3) RETURNING id, name;";

    return db.query(query, [name, email, password]);
  }

  public async getUserByID(id: number): Promise<QueryResult> {
    const query = "SELECT * from usuarios WHERE id = $1;";
    return db.query(query, [id]);
  }

  public async getUserByEmail(email: string): Promise<QueryResult> {
    const query = "SELECT * from usuarios WHERE email = $1;";
    return db.query(query, [email]);
  }
}

export default new UserRepositorie();
