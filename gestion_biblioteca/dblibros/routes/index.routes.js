import { Router } from "express";
import { alquilarLibro, createLibro, deleteLibro, devolverLibro, getAllLibros, getCategoriasLibros, getLibroById, getLibrosAlquilados, updateLibro } from "../controllers/libros.controller.js";
import { getAllAutores, updateAutor } from "../controllers/autores.controller.js";
import { getUser, registerUser } from "../controllers/login.controller.js"

import multer from 'multer'

const router = Router();


//const upload = multer({ dest: 'uploads/' })//donde se guarda


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null, file.originalname + '-' + Math.round(Math.random() * 1E9))
    }
})

const upload = multer({ storage: storage })

//imagen es el nombre del input
router.post("/subirAchivo", upload.single('imagen'), (req, res) => {
    //datos generados por multer
    console.log("El archivo subido es ", req.file)
    console.log("El cuerpo subido es ", req.body)
    res.send("archivo subido")

})

router.get("/libros", getAllLibros)
router.get("/libros/:id", getLibroById)
router.post("/libros", createLibro)
router.put("/libros/:id", updateLibro)
router.delete("/libros/:id", deleteLibro)
router.post("/alquilarLibros", alquilarLibro)
router.post("/devolverLibro", devolverLibro)


router.get("/autores", getAllAutores)
router.put("/autores/:id", updateAutor)
router.get("/librosCategorias/:id", getCategoriasLibros)

router.post("/login", getUser)
router.post("/register", registerUser)

export default router