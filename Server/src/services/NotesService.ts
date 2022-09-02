import NotesRepositorie from "../repositories/NotesRepositorie";

interface Note {
  title: string;
  content: string;
  title_color: string;
  content_color: string;
  box_color: string;
  created_at?: string;
  user_id?: number;
}

class NotesService {
  public async createNote(
    title: string,
    content: string,
    title_color: string,
    content_color: string,
    box_color: string,
    user_id: number
  ): Promise<object> {
    const { rows } = await NotesRepositorie.createNote(
      title,
      content,
      title_color,
      content_color,
      box_color,
      user_id
    );

    return rows[0];
  }

  public async getNotesById(id: number): Promise<Note> {
    const { rows } = await NotesRepositorie.getNoteById(id);

    return rows[0];
  }

  public async getAllNotes(user_id: number): Promise<Note[] | any[]> {
    const { rows } = await NotesRepositorie.getAllNotesByUserId(user_id);

    return rows;
  }

  public async deleteNoteById(id: number, userId: number) {
    const { rows } = await NotesRepositorie.deleteNoteById(id, userId);

    return rows;
  }

  public async getLatestNotes(user_id: number): Promise<Note[] | any[]> {
    const { rows } = await NotesRepositorie.getLatestNotes(user_id);

    return rows;
  }

  public async updateById(
    title: string,
    content: string,
    title_color: string,
    content_color: string,
    box_color: string,
    id: number,
    user_id: number
  ) {
    const { rows } = await NotesRepositorie.updateById(
      title,
      content,
      title_color,
      content_color,
      box_color,
      id,
      user_id
    );

    return rows;
  }
}

export default new NotesService();
