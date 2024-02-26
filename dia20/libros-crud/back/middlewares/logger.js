export const logger = (req,res,next)=>{
    console.log("Registro guardado en : ", req.originalUrl)
    console.log("Time: ", Date.now())
    next()
}