import { Router } from "express";
import NotesController from "../controllers/NotesController";

const notesRoute = Router();

notesRoute.get("/notes/allnotes/:userid", NotesController.getAllNotes);
notesRoute.get("/notes/latest/:userid", NotesController.getLatestNotes);
notesRoute.get("/notes/:id", NotesController.getNoteById);

notesRoute.post("/notes/newnote", NotesController.createNote);
notesRoute.put("/notes/edit/:id", NotesController.updateNoteById);
notesRoute.delete("/notes/:id", NotesController.deleteNoteById);

export default notesRoute;
