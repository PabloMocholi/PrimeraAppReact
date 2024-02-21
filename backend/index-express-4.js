import express from "express"
import { PORT } from './config.js'
import { timelog } from './middlewares/logger.js'
import xmlbuilder from "xmlbuilder"

/**
 * Mostrar distintos tipos de datos en respuesta
 */

const app = express()
console.clear()

const datos = [{
    id: 25,
    nombre: "Maria",
    email: "maria@email"
}]

app.use(timelog)

//JSON
app.get("/resp-json", (req, res) => {
    const jsonData = JSON.stringify(datos)
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData)
})

//XML
app.get("/resp-xml", (req, res) => {
    const xml = xmlbuilder.create('data')
        .ele('id', datos.id).up()
        .ele('nombre', datos.nombre).up()
        .ele('email', datos.email).up()
        .end({ pretty: true });

    res.header("Content-Type", "application/xml");
    res.send(xml)

})

//HTML
app.get("/resp-html", (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Page Title</title>
    </head>
    <body>
    
    <h1>${datos.nombre}</h1>
    <p>${datos.email} </p>
    
    </body>
    </html>`;
    res.header("Content-Type", "text/html");
    res.send(html)

})


app.get("/resp-json/:idusario", (req, res) => {

    const idusario = req.params.idusario;
    const user = datos.find( u => u.id == idusario)
    const jsonData = JSON.stringify(user)
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData)
})

app.listen(PORT, () => {
    console.log(`Running in ${PORT}`)
})

