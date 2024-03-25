import express from 'express'
import cors from 'cors'

import mongoose from 'mongoose'

const app = express()
console.clear()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


const conexion = async ()=>{
    const user = "pablomocholi66"
    const pass = "hROg5XQTRDvIy0CL"
    const db = "cei"
    const url = `mongodb+srv://${user}:${pass}@cei-pablo.3f5vxzt.mongodb.net/${db}`

    await mongoose.connect(url)
    .then(console.log("conectado a MongoDB - ATLAS"))
    .catch( e => console.log("error en la conezxion ", e))
}

conexion();

const options = {
    collection: "usuarios"
}
const alumnoSchema = new mongoose.Schema({

    name: String,
    username: String,
    email: String,
    edad: Number,
    isAdmin: Boolean,
    hobbies: Array
}, options)

const Alumno = mongoose.model("Alumno", alumnoSchema)

app.get("/", async(req,res, next)=>{

    const results = await Alumno.find()

    res.json(results)
})

app.listen(3000, ()=>{
    console.log("Running server")
})