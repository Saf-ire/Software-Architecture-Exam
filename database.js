const sql = require('mssql');
const conn = require('./config')

const students = [
    // {
    //     id: 1,
    //     name: 'Juan',
    //     password: 'Hola',
    //     career: 'IT',

    // }
];


module.exports.students = students;

module.exports.sql_conn = async (req, res, command, message) => {
    const pool = new sql.ConnectionPool(conn.config);

    try {
        await pool.connect();
        const response = await pool.request
        return res.json({ message: message, })
    } catch (error) {

    }
}