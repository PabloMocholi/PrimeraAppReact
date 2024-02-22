
console.log("Express");

const express = require("express");

const app = express();
console.clear();

/*****
 *  Ejemplos rutas
 */

app.get("/", (req, res) => {
    res.send("Bienvenidos a express.js")
    console.log("el usuario entró al home")
})

app.get("/perfil", (req, res) => {
    res.send("Bienvenidos a perfil")
    console.log("el usuario entró al perfil")
})

app.post("/users", (req, res) => {
    res.send("Seccion de users con post")
    console.log("el usuario realiza un post")
})
app.get("/users", (req, res) => {
    res.send("Seccion de users con get")
    console.log("el usuario realiza un post")
})


app.all("/metodos", (req, res) => {
    res.send("<h3>Soporta todos los metodos(POST,GET,DELETE,PUT)</h3>")

})

app.route("/libros")
    .get(function (req, res) {
        res.send("obtener libros")
    })
    .post(function (req, res) {
        res.send("agregar libros")
    })
    .put(function (req, res) {
        res.send("actualizar libros")
    })


app.get("/jsonUser", (req, res) => {
    res.status(200);
    res.type("json");
    res.json({nombre:"Sofia",id:1, edad:5})
    res.send("json")
})

app.get("*", (req, res) => {
    res.send("<h1>NOT FOUND</h1>")
    res.send("ruta inexistente")
})




app.listen(8080, () => {
    console.log("Server corriendo en 8080")
})