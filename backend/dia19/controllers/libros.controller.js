import { libros } from '../db/libros.js'

export const getAllLibros = (req, res) => {

    const jsonData = JSON.stringify(libros)
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData)

}


export const getLibroById = (req, res) => {

    const idlibro = req.params.idlibro;
    const libro = libros.libros.find(libro => libro.id == idlibro)

    if (libro) {
        const jsonData = JSON.stringify(libro)
        res.setHeader("Content-Type", "application/json");
        res.send(jsonData)
    } else {
        res.send("<h3>No tenemos ese libro</h3>")
    }

}

export const removeLibro = (req, res) => {

    console.log(req.body)

    const { id } = req.body
    console.log(id)
    const indexLibro = libros.libros.findIndex(libro => libro.id == id)

    console.log(indexLibro)

    libros.libros.splice(indexLibro,1)

    res.send("borrado con exito")

}
export const addLibro = (req, res) => {
    console.log(req.body)

    const { id, titulo, autor, categoria } = req.body
    libros.libros.push({ id, titulo, autor, categoria })


    res.send("agregado con exito")


}

export const updateLibro = (req, res) => {

    console.log(req.body)

    const { id, titulo, autor, categoria } = req.body
    const libro = libros.libros.find(libro => libro.id == id)

    libro.titulo = titulo
    libro.autor = autor
    libro.categoria = categoria


    res.send("modificado con exito")

}

