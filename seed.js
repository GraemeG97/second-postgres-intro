//dotenv set up
import dotenv from "dotenv";
dotenv.config();

import pg from "pg";
export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

//create table for portraits
db.query(`CREATE TABLE IF NOT EXISTS portraits (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    url TEXT
)`);

//INSERT PORTRAITS DATA
db.query(`INSERT INTP portraits (title, author, url)
VALUES
('')`);
