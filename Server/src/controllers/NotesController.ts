import { Request, Response } from "express";
import NotesService from "../services/NotesService";

class UserController {
  public async createNote(req: Request, res: Response): Promise<Response> {
    const { title, content, title_color, content_color, box_color, user_id } =
      req.body;

    try {
      const data = await NotesService.createNote(
        title,
        content,
        title_color,
        content_color,
        box_color,
        parseInt(user_id)
      );
      return res.json(data);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Ocorreu um erro ao criar nota" });
    }
  }

  public async getNoteById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const data = await NotesService.getNotesById(parseInt(id));

      return res.status(200).json(data);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }

  public async getAllNotes(req: Request, res: Response): Promise<Response> {
    const { userid } = req.params;

    try {
      const data = await NotesService.getAllNotes(parseInt(userid));

      return res.status(200).json(data);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }

  public async delteNoteById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const data = await NotesService.deleteNoteById(parseInt(id));

      return res.status(200).json({ message: "sucesso ao excluir nota" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }
}

export default new UserController();
