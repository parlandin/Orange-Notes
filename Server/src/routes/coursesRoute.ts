import { Router } from "express";
import CoursesController from "../controllers/CoursesController";
import validation from "../middlewares/validation.midlle";
import coursesSchema from "../validations/coursesValidation";

const coursesRouter = Router();

coursesRouter.get("/courses/getall/:userid", CoursesController.getAllCourses);
coursesRouter.post(
  "/courses/newcourse",
  validation(coursesSchema),
  CoursesController.createCourse
);
coursesRouter.put(
  "/courses/update/:id",
  validation(coursesSchema),
  CoursesController.updateCourseById
);
coursesRouter.delete("/courses/delete/:id", CoursesController.deleteCourse);

export default coursesRouter;
