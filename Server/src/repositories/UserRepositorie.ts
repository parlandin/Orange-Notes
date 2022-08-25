import db from "../db";
import { QueryResultRow } from "pg";

class UserRepositorie {
  public async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<QueryResultRow> {
    const query =
      "INSERT INTO  usuarios (name, email, password) VALUES ($1, $2, $3) RETURNING id, name;";

    return db.query(query, [name, email, password]);
  }
}

export default new UserRepositorie();
