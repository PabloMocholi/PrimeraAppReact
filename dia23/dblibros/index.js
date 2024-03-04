import express from 'express'
import cors from 'cors'
import { PORT, fullDomain } from './config/config.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors());

console.clear()

import { Sequelize, DataTypes } from 'sequelize'

//crear instancia

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/datos.sqlite'
})

//Definir modelos (tablas)
const Libros = sequelize.define('libros', {
 
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    categoria: DataTypes.STRING,
})

//Sincronizar mis modelos con mi BD (crea tablas si no hay)

sequelize.sync({alter:true})


app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send("<h1>Hola</h1>")
})

app.get("/API/v1/libros", async(req, res) => {
    const users = await Libros.findAll();
    res.json(users)
})

app.post("/API/v1/libros", async(req, res) => {

    const {titulo, autor, categoria} = req.body
    console.log(req.body)

 
    let libroNuevo = {
        titulo,
        autor,
        categoria
    }

    console.log(libroNuevo)

    const users = await Libros.create(libroNuevo);
    res.json(users)
})

app.get("/API/v1/libros/:id", async(req, res) => {
    const users = await Libros.findAll();
    res.json(users)
})


export const getLibroById = async(req, res) => {
    const users = await Libros.findByPk(req.params.id);
    res.json(users)
}


app.put("/API/v1/libros/:id", async(req, res) => {
    const user = await Libros.findByPk(req.params.id);

    if(user){
        await user.update(req.body);
    }
    res.json(user)
})

app.delete("/API/v1/libros/:id", async (req, res) => {
    const user = await Libros.findByPk(req.params.id)
    if(user){
        await user.destroy(req.body)
        res.json({msg: "libro eliminado correctamente"})
    }else {
        res.status(404).json({msg: "usuario no encontrado"})
    }
})

app.listen(PORT, () => {
    console.log(`Running in ${fullDomain}`)
}) 