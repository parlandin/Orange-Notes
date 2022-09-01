import db from "../db";
import { QueryResultRow } from "pg";

class NotesRepositorie {
  public async createNote(
    title: string,
    content: string,
    title_color: string,
    content_color: string,
    box_color: string,
    user_id: number
  ): Promise<QueryResultRow> {
    const query =
      "INSERT INTO  notes (title, content, title_color, content_color, box_color, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * ;";

    return db.query(query, [
      title,
      content,
      title_color,
      content_color,
      box_color,
      user_id,
    ]);
  }

  public async getNoteById(id: number) {
    const query = "SELECT * FROM notes WHERE note_id = $1";

    return db.query(query, [id]);
  }

  public async getAllNotesByUserId(user_id: number) {
    const query =
      "SELECT * FROM notes WHERE user_id = $1 ORDER BY note_id DESC";

    return db.query(query, [user_id]);
  }

  public async deleteNoteById(id: number) {
    const query = "DELETE  FROM notes WHERE note_id = $1";

    return db.query(query, [id]);
  }

  public async getLatestNotes(user_id: number) {
    const query = `SELECT * 
    FROM notes WHERE user_id = $1
    ORDER BY note_id DESC
    LIMIT 4`;

    return db.query(query, [user_id]);
  }
}

export default new NotesRepositorie();
