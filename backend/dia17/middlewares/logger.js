export const  timelog = (req,res,next)=>{
    console.log("time: ", Date.now())
    next()
}