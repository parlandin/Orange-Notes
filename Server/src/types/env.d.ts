import { Secret } from "jsonwebtoken";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      USER: string;
      HOST: string;
      DATABASE: string;
      PASSWORD: string;
      DBPORT: string;
      PORT: number;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
