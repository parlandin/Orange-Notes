import db from "../db";
import { QueryResultRow } from "pg";

class CoursesRepositories {
  public async createCourse(
    title: string,
    url: string,
    image_url: string,
    category: string,
    user_id: number
  ) {
    const query =
      "INSERT INTO  courses (title, url, image_url, category, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING * ;";

    return db.query(query, [title, url, image_url, category, user_id]);
  }
}

export default new CoursesRepositories();
