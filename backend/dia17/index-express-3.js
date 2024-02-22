const express = require("express");
const app = express();

const PORT = 3000
console.clear()


//Middlewares: funciones que se ejecutan en medio de un proceso

//ejemplo 1
function timelog(req,res,next){
    console.log("time: ", Date.now())
    next()
}

app.use(timelog)


//ejemplo 2
const middleWare1 = function(req,res,next){

    console.log("Registro guardado 1");
    next();

}
const middleWare2 = function(req,res,next){

    console.log("Registro guardado 2");
    next();

}

app.use(middleWare1,middleWare2)

//ejemplo 3

app.use("/admin", (req,res,next)=>{
    console.log("Request URL", req.originalUrl);
    next()
}, (req,res,next)=>{
    console.log("Request type", req.method)
    next()
})


app.get("/", (req,res)=>{

    res.send("HOLA")
    console.log("HOLA")
})


app.listen(PORT, ()=>{
    console.log(`servidor en el puerto ${PORT}`)
})