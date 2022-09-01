import { Router } from "express";
import NotesController from "../controllers/NotesController";

const notesRoute = Router();

notesRoute.get("/notes/allnotes/:userid", NotesController.getAllNotes);
notesRoute.get("/notes/latest/:userid", NotesController.getLatestNotes);
notesRoute.get("/notes/:userid/:id", NotesController.getNoteById);

notesRoute.delete("/notes/:userid/:id", NotesController.deleteNoteById);
notesRoute.post("/notes/newnote", NotesController.createNote);

export default notesRoute;
