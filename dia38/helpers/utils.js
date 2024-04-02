import jwt from 'jsonwebtoken'

export const generarTokenJWT = (user)=>{
    const secretKey = process.env.JWT_SECRET

    console.log(secretKey)

    const payload = {
        userId: user._id,
        rol: user.rol
    }

    const token = jwt.sign(payload,secretKey,{expiresIn:'1h'})

    return token
}

//verificar

export const verifyToken = (req, res , next)=>{
    const header = req.header("Authorization") || ""
    const token = header.split(" ")[1]

    const secretKey = process.env.JWT_SECRET

    if(!token)
        return res.status(401).json({msg:"no tienes permiso"})
    
    try {

        const payload = jwt.verify(token, secretKey)

        req.stuff = payload

        next()
        
    } catch (error) {
        return res.status(403).json({msg:"token no valido"})
    }
}