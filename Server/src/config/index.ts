import "dotenv/config";

export default {
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
  SECRET_JWT: process.env.SECRET_JWT,
};
