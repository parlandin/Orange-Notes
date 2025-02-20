import { Pool } from "pg";
import config from "../config";

const db = new Pool({
  connectionString: config.DATABASE_URL,
});

export default db;
