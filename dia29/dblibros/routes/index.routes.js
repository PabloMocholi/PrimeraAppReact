import { Router } from "express";
import { createLibro, deleteLibro, getAllLibros, getCategoriasLibros, getLibroById, updateLibro } from "../controllers/libros.controller.js";
import { getAllAutores, updateAutor } from "../controllers/autores.controller.js";

const router = Router();


router.get("/libros", getAllLibros)
router.get("/libros/:id", getLibroById)
router.post("/libros", createLibro)
router.put("/libros/:id",updateLibro)
router.delete ("/libros/:id", deleteLibro)

router.get("/autores", getAllAutores)
router.put("/autores/:id", updateAutor)
router.get("/librosCategorias/:id", getCategoriasLibros)

export default router