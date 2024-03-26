import express from 'express'
import cors from 'cors'

import mongoose from 'mongoose'

import { PORT, fullDomain, DB_USER, DB_PASS, DB_DB } from './config/config.js'

const app = express()
console.clear()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/**
 * Listas de Plantas , animales y decoración

    - CRUD de cada elemento
    - Categorias [Plantas, Animales, Decoración]
    - Producto {
        titulo, precio, imagen, precio_dcto, stock, isFavorito, categoria
    }
    - Roles: [usuarios, admin]
    - BUSCADOR
 */



const conexion = async () => {
    
    // const user =  USER // "pablomocholi66"
    // const pass =  PASS //"hROg5XQTRDvIy0CL"
    // const db =  DB //"cei"

    const url = `mongodb+srv://${DB_USER}:${DB_PASS}@cei-pablo.3f5vxzt.mongodb.net/${DB_DB}`
    console.log(url)

    await mongoose.connect(url)
        .then(console.log("conectado a MongoDB - ATLAS"))
        .catch(e => console.log("error en la conezxion ", e))
}

conexion();

const options = {
    collection: "productos",

}
const productoSchema = new mongoose.Schema({

    titulo: String,
    categoria: String,
    precio: Number,
    imagen: String,
    descuento: Number,
    stock: Number,
    is_Favorito: Boolean
    
}, options)

const Producto = mongoose.model("Producto", productoSchema)

app.get("/", async (req, res, next) => {

    const results = await Producto.find()

    res.json(results)
})


app.get("/productos", async (req, res, next) => {

    const results = await Producto.find()

    res.json(results)
})

// app.get("/nombre/:nombre/:edad", async (req, res, next) => {

//     const { nombre, edad } = req.params
//     // const nombre = req.params.nombre 

//     const results = await Alumno.find({ name: nombre, edad: edad })
//         .select({ edad: 0 }) //trae todo menos edad, se podría marcar con un 1 el nombre de los campos que se quieren traer

//     res.json(results)
// })

// app.get("/usuarios/:id", async (req, res, next) => {

//     const { id } = req.params
//     // const nombre = req.params.nombre 

//     const results = await Alumno.findById(id)

//     res.json(results)
// })

// app.post("/usuarioEstatico", async (req, res) => {
//     const nuevoUser = new Alumno({

//         name: "Lucas",
//         username: "luquitas",
//         edad: 22,
//         isAdmin: true,
//         hobbies: ["bici", "ajedrez"],
//         libro_fav: "Harry Potter"

//     })

//     await nuevoUser.save();

//     //Duelve todos los usuarios
//     const allUsers = await Alumno.find()
//     res.json(allUsers)
// })

// app.post("/usuarioForm", async (req, res) => {

//     const { name, username, edad, isAdmin = false, hobbies } = req.body
//     const nuevoUser = new Alumno({

//         name: name,
//         username: username,
//         edad: edad,
//         isAdmin: isAdmin,
//         hobbies: hobbies

//     })

//     await nuevoUser.save();

//     //Duelve todos los usuarios
//     const allUsers = await Alumno.find()
//     res.json(allUsers)
// })



// app.put("/usuarioActualizar/:id", async (req, res) => {

//     const { name, username } = req.body
//     const { id } = req.params

//     try {
//         const alumnoEditado = await Alumno.findByIdAndUpdate(id, { name, username }) //{name:name, username:username}
//         res.json(alumnoEditado)
//     } catch (error) {

//         res.json(error)

//     }


// })

// app.delete("/usuarios/:id", async (req, res) => {
//     const { id } = req.params
//     console.log(id)

//     try {
//         const alumno = await Alumno.findByIdAndDelete(id)

//         res.json({
//             msg: "eliminado con exito",
//             alu: alumno,
//             status: "OK"
//         })

//     } catch (error) {

//         res.json(error)

//     }

// })

// app.get("/operadores", async (req, res) => {
//     const users = await Alumno.find({ edad: { $gt: 18, $lt: 65 } })

//     const usersNotAdmin = await Alumno.find({ isAdmin: { $eq: false } })

//     const hobbies = await Alumno.find({ hobbies: { $in: "videojuegos" } })

//     const usersConHobbies = await Alumno.find({ hobbies: { $exists: true } })

//     res.json(usersConHobbies)
// })



app.listen(PORT, () => {
    console.log("Running server", fullDomain)
})