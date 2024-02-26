import { Router } from "express";
import { createLibro, deleteLibro, getAllLibros, getLibroById, updateLibro } from "../controllers/libros.controller.js";

const router = Router();


router.get("/libros", getAllLibros)
router.get("/libros/:id", getLibroById)
router.post("/libros", createLibro)
router.put("/libros/:id",updateLibro)
router.delete ("/libros/:id", deleteLibro)

export default router