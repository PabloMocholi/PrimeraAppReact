import express from 'express'
import cors from 'cors'
import { PORT, fullDomain } from './config/config.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

console.clear()

import { Sequelize, DataTypes } from 'sequelize'

//crear instancia

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/datos.sqlite'
})

//Definir modelos (tablas)
const Users = sequelize.define('usuarios', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    edad: DataTypes.INTEGER
})

//Sincronizar mis modelos con mi BD (crea tablas si no hay)

sequelize.sync({alter:true})


app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send("<h1>Hola</h1>")
})

app.get("/users", async(req, res) => {
    const users = await Users.findAll();
    res.json(users)
})

app.post("/users", async(req, res) => {
    const users = await Users.create(req.body);
    res.json(users)
})


app.put("/users/:id", async(req, res) => {
    const user = await Users.findByPk(req.params.id);

    if(user){
        await user.update(req.body);
    }
    res.json(user)
})



app.listen(PORT, () => {
    console.log(`Running in ${fullDomain}`)
})