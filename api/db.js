import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables
console.log(process.env.DB_USER); 

export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

