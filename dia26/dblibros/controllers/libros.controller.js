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

export const getAllLibros = async (req, res) => {

    const [results, fields] = await connection.query(
        'SELECT libros.*, autores.autor FROM libros JOIN autores WHERE (libros.id_autor = autores.id)'
    );

    console.log(results);
    console.log(fields)
    res.status(200).send(results);


}
export const getLibroById = async(req, res) => {
    const idLibro = req.params.id

    const [results, fields] = await connection.query(
        'SELECT * FROM libros WHERE libros.id =' + idLibro
    );

    console.log(results);
    console.log(fields)
    res.status(200).send(results);

}
export const updateLibro = async (req, res) => {

    console.log("HE MANDADO ACTUALIZAR",req.body);
    const {id, id_autor, libro, autor, precio} = req.body


    let [results, fields] = await connection.query(
        'UPDATE libros SET libros.libro = ?, libros.precio = ? WHERE libros.id = ?',
        [libro, precio, id]
    );
    
    [results, fields] = await connection.query(
        'UPDATE autores SET autores.autor = ? WHERE autores.id = ?',
        [autor, id_autor]
    );

    res.status(200).send(results);

}
export const createLibro = async (req, res) => {   
    console.log("VAMOS A CREAR")
 
}

export const deleteLibro = async(req, res) => {

    console.log("VAMOS A BORRAR", req.params.id)

    let [results, fields] = await connection.query(
        'DELETE FROM libros WHERE id='+ req.params.id,
    
    );
    res.status(200).send(results);


}