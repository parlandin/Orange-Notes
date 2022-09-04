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

  public async getlAllCourses(user_id: number) {
    const query =
      "SELECT title, url, image_url, category, course_id, user_id FROM courses WHERE user_id = $1";

    return db.query(query, [user_id]);
  }
}

export default new CoursesRepositories();
