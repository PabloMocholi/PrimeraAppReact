import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_biblioteca'
})

const responseApi = {
    data: [],
    msg: "",
    status: "ok"
}
export const getUser = async (req, res) => {

    console.log("SELECT USER")
    const { user, pass } = req.body
    console.log(req.body)

    const [results, fields] = await connection.query(
        'SELECT * from usuarios WHERE usuarios.usuario = ? AND usuarios.password = ?',
        [user, pass]
    );

    res.status(200).send(results);


}