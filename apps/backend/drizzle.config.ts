import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

export const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_explorer_web',
});

export const db = drizzle(connection);
