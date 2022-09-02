import { Request, Response } from "express";
import NotesService from "../services/NotesService";
import AuthenticationRequest from "../types/express";

class UserController {
  public async createNote(
    req: AuthenticationRequest,
    res: Response
  ): Promise<Response> {
    const { title, content, title_color, content_color, box_color, user_id } =
      req.body;

    if (!req.userId || req.userId != parseInt(user_id)) {
      return res.status(401).json({ message: "Você não tem permissão" });
    }

    try {
      const data = await NotesService.createNote(
        title,
        content,
        title_color,
        content_color,
        box_color,
        parseInt(user_id)
      );
      return res.status(201).json(data);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Ocorreu um erro ao criar nota" });
    }
  }

  public async getNoteById(
    req: AuthenticationRequest,
    res: Response
  ): Promise<Response> {
    const { id } = req.params;
    const { userid } = req.params;

    if (!req.userId || req.userId != parseInt(userid)) {
      return res.status(401).json({ message: "Você não tem permissão" });
    }

    try {
      const data = await NotesService.getNotesById(parseInt(id));

      return res.status(200).json(data);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }

  public async getAllNotes(
    req: AuthenticationRequest,
    res: Response
  ): Promise<Response> {
    const { userid } = req.params;

    if (!req.userId || req.userId != parseInt(userid)) {
      return res.status(401).json({ message: "Você não tem permissão" });
    }

    try {
      const data = await NotesService.getAllNotes(parseInt(userid));

      return res.status(200).json(data);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }

  public async getLatestNotes(
    req: AuthenticationRequest,
    res: Response
  ): Promise<Response> {
    const { userid } = req.params;

    if (!req.userId || req.userId != parseInt(userid)) {
      return res.status(401).json({ message: "Você não tem permissão" });
    }

    try {
      const data = await NotesService.getLatestNotes(parseInt(userid));

      return res.status(200).json(data);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }

  public async deleteNoteById(
    req: AuthenticationRequest,
    res: Response
  ): Promise<Response> {
    const { id } = req.params;
    const { userid } = req.params;

    if (!req.userId || req.userId != parseInt(userid)) {
      return res.status(401).json({ message: "Você não tem permissão" });
    }

    try {
      const data = await NotesService.deleteNoteById(parseInt(id));

      return res.status(200).json({ message: "sucesso ao excluir nota" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
  }

  public async updateNoteById(
    req: AuthenticationRequest,
    res: Response
  ): Promise<Response> {
    const { title, content, title_color, content_color, box_color } = req.body;

    const { id } = req.params;
    const { userid } = req.params;

    if (!req.userId || req.userId != parseInt(userid)) {
      return res.status(401).json({ message: "Você não tem permissão" });
    }

    try {
      const data = await NotesService.updateById(
        title,
        content,
        title_color,
        content_color,
        box_color,
        parseInt(id)
      );
      return res.status(200).json({ message: "Atualizado com sucesso" });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ error: "Ocorreu um erro ao atualizar a  nota" });
    }
  }
}

export default new UserController();
