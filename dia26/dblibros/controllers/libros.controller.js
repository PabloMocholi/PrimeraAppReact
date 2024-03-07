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
        'SELECT libros.*, autores.autor  FROM libros LEFT JOIN autores ON (libros.id_autor = autores.id) '
    );

    console.log(results);
    console.log(fields)
    res.status(200).send(results);

}
export const getLibroById = async (req, res) => {
    const idLibro = req.params.id

    const [results, fields] = await connection.query(
        'SELECT * FROM libros WHERE libros.id =' + idLibro
    );

    console.log(results);
    console.log(fields)
    res.status(200).send(results);

}
export const updateLibro = async (req, res) => {

    console.log("HE MANDADO ACTUALIZAR", req.body);
    const { id, id_autor, libro, autor, precio } = req.body


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
    console.log(req.body)

    const { libro, autor, precio } = req.body

    // Veo si existe el autor
    let [results, fields] = await connection.query(
        'SELECT autores.id FROM autores WHERE autores.autor = ?', [autor]
    );

    //Si existe
    if (results.length > 0) {
        console.log("ID del autor", results[0].id)

        //Añado libro con el id_autor obtenido
        const query = 'INSERT INTO libros (libro, id_autor, precio) VALUES (?, ?, ?)';
        const values = [libro, results[0].id, precio];
        const [result, fields] = await connection.query(query, values);
        res.status(200).send(result);
    }
    else {
        console.log("Creo nuevo autor", results)

        //Añado nuevo autor
        let query = 'INSERT INTO autores (autor) VALUES (?)';
        let values = [autor];

        let [result, fields] = await connection.query(query, values);

        //selecciono su id
        [results, fields] = await connection.query(
            'SELECT autores.id FROM autores WHERE autores.autor = ?', [autor]
        );
        //Añado libro con el id_autor obtenido
        query = 'INSERT INTO libros (libro, id_autor, precio) VALUES (?, ?, ?)';
        values = [libro, results[0].id, precio];
        [result, fields] = await connection.query(query, values);
        res.status(200).send(result);
    }

}

export const deleteLibro = async (req, res) => {

    console.log("VAMOS A BORRAR", req.params.id)

    let [results, fields] = await connection.query(
        'DELETE FROM libros WHERE id=' + req.params.id,

    );
    res.status(200).send(results);

}


export const getCategoriasLibros = async (req, res) => {
    req.params.id

    const [results, fields] = await connection.query(
        'SELECT categorias.categoria FROM link_libros_categorias LEFT JOIN categorias ON (link_libros_categorias.id_categoria = categorias.id) WHERE link_libros_categorias.id_libro=' + req.params.id 
    );

    console.log(results);
    console.log(fields)
    res.status(200).send(results);

}