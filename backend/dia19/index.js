import express from 'express'
import { PORT,domain } from './config/config.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

console.clear()

app.use(express.json())//recibir body como json

app.use("/API/V1/", indexRoutes)

app.get("/", (req, res) => {

    res.send("Biblioteca")
    

})


app.listen(PORT, () => {
    console.log(`Running in ${PORT}`)
})

