import connection from '../db/mysql.db.js'

const responseApi = {
    data: [],
    msg: "",
    status: "ok"
}

export const getAllLibros = async (req, res) => {

    const [results, fields] = await connection.query(
        'SELECT libros.*, autores.autor, alquiler.id_usuario, alquiler.fecha_inicio FROM libros LEFT JOIN autores ON (libros.id_autor = autores.id) LEFT JOIN alquiler ON (libros.id = alquiler.id_libro AND alquiler.fecha_fin is NULL)  ORDER BY libros.libro'
    );

    // console.log(results);
    // console.log(fields)
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

export const getLibrosAlquilados = async (req, res) => {

    let query = 'SELECT id_libro FROM alquiler WHERE id_usuario = ?;'
    let value = [req.params.id];

    const [result, fields] = await connection.query(query, value);

    res.status(200).send(result);

}

export const devolverLibro = async (req, res) => {

    const { id_user, id_libro } = req.body

    const fecha_fin = new Date(); // Obtén la fecha y hora actual
    // Formatea la fecha y hora en el formato de MySQL DATETIME
    const formatted_fecha_fin = fecha_fin.toISOString().slice(0, 19).replace('T', ' ');

    let query = 'UPDATE alquiler SET fecha_fin = ? WHERE id_usuario = ? AND id_libro = ?;'
    let value = [formatted_fecha_fin, id_user, id_libro];

    const [result, fields] = await connection.query(query, value);

    res.status(200).send(result);
}


export const alquilarLibro = async (req, res) => {

    const { id_user, id_libro } = req.body
    console.log("ALQUILAR LIBRO " + id_libro + " para el user " + id_user)

    let contador = 'SELECT COUNT(*) FROM alquiler WHERE id_usuario = ? AND fecha_fin is NULL;'
    let value = [id_user];
    const [result, fields] = await connection.query(contador, value);

    console.log(result)

    if (result[0]['COUNT(*)'] < 2) { //Insertamos

        let query = 'INSERT INTO alquiler (id_usuario, id_libro) VALUES (?, ?)';
        let values = [id_user, id_libro];

        const [result, fields] = await connection.query(query, values);

        responseApi.data = result
        responseApi.msg = "libro alquilado"
        responseApi.status = "ok"

    } else {

        responseApi.data = []
        responseApi.msg = "no es posible alquilar más"
        responseApi.status = "error"

    }

    res.status(200).send(responseApi);



    //console.log(result[0]['COUNT(*)'])



}



