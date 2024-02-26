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
    responseApi.data = "";
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