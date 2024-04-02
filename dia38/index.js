import express from "express"
import cors from "cors"
import indexRoutes from './routes/index.routes.js'
import dotenv from 'dotenv'


dotenv.config()

const app = express()
console.clear()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req,res,next)=>{
    res.setHeader("Content-Type", "text/html");
    const land = `<h1>API auth JWT</h1>`
    res.send(land)
})

app.use("/API/", indexRoutes)

app.listen(3000, ()=>{
    console.log("server running in http://localhost:3000")
})