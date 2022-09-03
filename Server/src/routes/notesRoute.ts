import { Router } from "express";
import NotesController from "../controllers/NotesController";
import validation from "../middlewares/validation.midlle";
import notesSchema from "../validations/notesValidation";

const notesRoute = Router();

notesRoute.get("/notes/allnotes/:userid", NotesController.getAllNotes);
notesRoute.get("/notes/latest/:userid", NotesController.getLatestNotes);
notesRoute.get("/notes/:id", NotesController.getNoteById);

notesRoute.post(
  "/notes/newnote",
  validation(notesSchema),
  NotesController.createNote
);
notesRoute.put(
  "/notes/edit/:id",
  validation(notesSchema),
  NotesController.updateNoteById
);
notesRoute.delete("/notes/:id", NotesController.deleteNoteById);

export default notesRoute;
