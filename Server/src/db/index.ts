import { Pool } from "pg";
import config from "../config";

//const port = parseInt(config.DBPORT, 10);

const db = new Pool({
  user: config.USER,
  host: config.HOST,
  database: config.DATABASE,
  password: config.PASSWORD,
  port: 5432, //temporario
});

export default db;
