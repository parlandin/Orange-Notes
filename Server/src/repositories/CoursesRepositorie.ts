import db from "../db";
import { QueryResultRow } from "pg";
import { query } from "express";

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

  public async updateCourse(
    title: string,
    url: string,
    image_url: string,
    category: string,
    id: number,
    user_id: number
  ) {
    const query = `UPDATE courses set title = $1, 
                  url = $2, 	
                  image_url = $3, 
                  category = $4
                  WHERE course_id = $5 AND user_id = $6 RETURNING  *;`;

    return db.query(query, [title, url, image_url, category, id, user_id]);
  }

  public async deleteCourseById(id: number, user_id: number) {
    const query =
      "DELETE  FROM courses WHERE course_id = $1 AND user_id = $2 RETURNING *";

    return db.query(query, [id, user_id]);
  }
}

export default new CoursesRepositories();
