import mysql from 'mysql2'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testing'
}).promise()

const result = await pool.query("SELECT * FROM expenses")

console.log(result);