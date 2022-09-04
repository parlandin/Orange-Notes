import { Router } from "express";
import CoursesController from "../controllers/CoursesController";

const coursesRouter = Router();

coursesRouter.post("/courses/newcourse", CoursesController.createCourse);

export default coursesRouter;
