import { misDatos } from "../db/libros.js"

const listaLibros = misDatos.libros;

const responseApi = {
    data: listaLibros,
    msg: "",
    status: "ok"
}

export const getAllLibros = (req, res) => {
    responseApi.data = listaLibros;
    responseApi.msg = "Obtener TODOS los libros";
    responseApi.status = "ok";
    res.status(200).send(responseApi);
}
export const getLibroById = (req, res) => {
    responseApi.data = "";
    responseApi.msg = "Obtener 1 libro";
    responseApi.status = "ok";
    res.status(200).send(responseApi);
}
export const updateLibro = (req, res) => {

    //recibir datos del body
    console.log(req.body)
    const {id, titulo, autor, categoria} = req.body

    //buscar libro por id
    const index = listaLibros.findIndex(libro => libro.id == id)

    //actualizo libro

    listaLibros[index] = {
        ...listaLibros[index], 
        titulo,
        autor,
        categoria
    }
    //respondo con la nueva lista

    responseApi.data = listaLibros
    responseApi.msg = "Actualizado ";
    responseApi.status = "ok";
    res.status(200).send(responseApi);
}
export const createLibro = (req, res) => {
    responseApi.data = "";
    responseApi.msg = "Creado";
    responseApi.status = "ok";
    res.status(200).send(responseApi);
}

export const deleteLibro = (req, res) => {
    responseApi.data = "";
    responseApi.msg = "Eliminado";
    responseApi.status = "ok";
    res.status(200).send(responseApi);
}