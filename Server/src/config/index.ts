import "dotenv/config";

export default {
  USER: process.env.USER,
  HOST: process.env.HOST,
  DATABASE: process.env.DATABASE,
  PASSWORD: process.env.PASSWORD,
  DBPORT: process.env.DBPORT,
  PORT: process.env.PORT,
  SECRET_JWT: process.env.SECRET_JWT,
};
