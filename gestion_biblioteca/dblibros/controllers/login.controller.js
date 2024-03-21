import connection from '../db/mysql.db.js'
import bcrypt from 'bcrypt'
import { addToLog } from '../helper/addToLog.js'

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
        'SELECT * from usuarios WHERE usuarios.usuario = ?',
        [user]
    );

    console.log("RESULTS",results[0]);

    let passCorrect = bcrypt.compareSync(pass, results[0].password)
    console.log(passCorrect)

    if(passCorrect){

        responseApi.data = results
        responseApi.msg = "usuario logeado"
        responseApi.status = "ok"

        addToLog("LOGIN USER", null, results[0].id)

        res.status(200).send(responseApi);

    }else{
        responseApi.data = []
        responseApi.msg = "usuario NO logeado"
        responseApi.status = "error"
        addToLog("FAILED LOGIN USER", "error", results[0].id)
        res.status(200).send(responseApi);
    }

  



}

export const registerUser = async (req, res) => {

    console.log("INSERT USER")
    const { user, pass } = req.body
    console.log("Cuerpo del registro",req.body)

    let passEncrypted  = bcrypt.hashSync(pass,10)

    const consulta = 'INSERT INTO usuarios (usuario, password) VALUES (?, ?);'

    const [results, fields] = await connection.query(
        consulta,
        [user, passEncrypted]
    );

    addToLog("USER REGISTERED", null, results[0].id)

    //Ahora usamos insertId del results para buscar el nuevo usuario y mandarlo

    res.status(200).send(results);


}
