import { generarTokenJWT } from "../helpers/utils.js"
import bcrypt from 'bcrypt'


export const LoginUser = async (req,res,next)=>{
    try {

        const{user, pass} = req.body

        //buscar en la db mi usuario
        const usuario = { _id:"1838135ghvehj1vjh1b",nombre: "marisa", rol: "admin", pass:"ubjjhkblnkl"}

        /*
        //comparar contraseña
        const isValid = await bcrypt.compare(pass, usuario.pass)


        if(!isValid)
            return res.json({mes:"login INCORRECTO", status:"fail" })*/


        //generar "TOKEN"
        const token = generarTokenJWT(usuario)

        //delete user.pass

        res.json({mes:"login correcto", jwtToken: token, user:usuario, status:"ok" })
        
        
    } catch (error) {
        next(error);
    }
}


export const RegisterUser = async (req,res,next)=>{
    try {
        
    } catch (error) {
        next(error);
    }
}