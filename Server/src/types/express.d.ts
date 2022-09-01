import { Request } from "express";

interface AuthenticationRequest extends Request {
  userId?: number;
}

export default AuthenticationRequest;
