import { Router } from "express";
import { LoginUser } from "../controller/auth.controller.js";
import { verifyToken } from "../helpers/utils.js";

const router = Router()

//rutas auth

router.post("/auth/login", LoginUser)

router.post("/auth/register", ()=>{
    
})


router.post("/panel-de-control", verifyToken, (req,res)=>{
    console.log("tienes permiso", req.stuff)
})




//rutas app



export default router;