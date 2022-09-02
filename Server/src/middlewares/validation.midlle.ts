import { Request, Response, NextFunction } from "express";
import * as yup from "yup";

const validation =
  (schema: yup.AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    try {
      await schema.validate(body);
      next();
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };

export default validation;
