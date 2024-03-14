import connection from '../db/mysql.db.js'
import bcrypt from 'bcrypt'

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

export const registerUser = async (req, res) => {

    console.log("INSERT USER")
    const { user, pass } = req.body
    console.log(req.body)

    let passEncrypted  = bcrypt.hashSync(pass,10)

    const consulta = 'INSERT INTO usuarios (usuario, password) VALUES (?, ?);'

    const [results, fields] = await connection.query(
        consulta,
        [user, passEncrypted]
    );

    //Ahora usamos insertId del results para buscar el nuevo usuario y mandarlo

    res.status(200).send(results);


}
