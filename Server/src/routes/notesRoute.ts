import { Router } from "express";
import NotesController from "../controllers/NotesController";

const notesRoute = Router();

notesRoute.post("/notes/newnote", NotesController.createNote);
notesRoute.get("/notes/:id", NotesController.getNoteById);
notesRoute.get("/notes/allnotes/:userid", NotesController.getAllNotes);
notesRoute.delete("/notes/:id", NotesController.delteNoteById);

export default notesRoute;
