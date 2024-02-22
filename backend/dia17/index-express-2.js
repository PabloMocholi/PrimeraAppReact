const express = require("express")

/***
 * 
 * 
 *  Ejemplos MiddleWares
 * 
 */
const app = express();
console.clear();

app.get("/ejemplo/a", (req, res, next) => {
    console.log("ejemplo A")
    setTimeout(() => {
        console.log("timeout");
        next()
    }, 2000)

}, function (req, res) {
    console.log("2º parte")
    res.send("Llegaste a la segunda función")
})

//ENVIAR INFO MIENTRAS EL SERVER TRABAJA

app.get("/ejemplo/b", (req, res, next) => {
    console.log("La respuesta serña enviada ANTES de finalizar el timeout")
    next()
    setTimeout(() => {
        console.log("timeout")
    }, 2000)
}, function (req, res) {
    console.log("2ª")
    res.send("Llegaste a la segunda función (B)")
})


//CREAR UNA PROMESA ANTES DE ENVIAR DATOS

app.get("/ejemplo/c", (req, res, next) => {
    console.log("La respuesta sera enviada una vez cumplida la promesa")
    new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("timeout")
            resolve();
            //reject();
        }, 2000)

    }).then((() => {
        //usamos then para llamar a next cuando se resuelva la promise
        next()
    }))



}, function (req, res) {
    console.log("2ª")
    res.send("Llegaste a la segunda función (C)")
})

app.listen(8080, () => {
    console.log("Servidor running")
})