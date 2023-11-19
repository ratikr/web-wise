import { sql } from "../database/database.js";

const create = async (sender, message) => {
  await sql`INSERT INTO messages (sender, message)
    VALUES (${ sender }, ${ message })`;
};

const findAll = async () => {
  const result = await sql`SELECT * FROM messages order by id desc limit 5`;
  return result;
};


export { create, findAll };