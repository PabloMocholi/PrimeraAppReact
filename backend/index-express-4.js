import express from "express"
import {PORT} from './config.js'
import {timelog} from './middlewares/logger.js'

/**
 * Mostrar distintos tipos de datos en respuesta
 */

const app = express()
console.clear()

const datos = {
    id:25,
    nombre:"Maria",
    email:"maria@email"
}

app.use(timelog)

app.get("/resp-json", (req,res)=>{
    const jsonData = JSON.stringify(datos)
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData)
})

app.listen(PORT, ()=>{
    console.log(`Running in ${PORT}`)
})

