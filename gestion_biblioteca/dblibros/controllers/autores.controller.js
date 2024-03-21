
import connection from '../db/mysql.db.js'

const responseApi = {
    data: [],
    msg: "",
    status: "ok"
}

export const getAllAutores = async (req, res) => {

    const [results, fields] = await connection.query(
        'SELECT * from autores'
    );

    res.status(200).send(results);


}

export const updateAutor = async (req, res) => {

    console.log("HE MANDADO ACTUALIZAR AUTOR", req.body);
    const { id, autor } = req.body


    let [results, fields] = await connection.query(
        'UPDATE autores SET autores.autor = ? WHERE autores.id = ?',
        [autor, id]
    );

    res.status(200).send(results);
    

}