import { useState, useEffect, useContext } from "react"
import { easyFetch } from "../../helpers/utils"
import { useNavigate } from "react-router-dom"
import { LoginContext } from '../App'; 


const Login = ()=>{

    const [formData, setFormData] = useState({})
    const [userLoged, setLoged] = useState([])
    const [isLoged, setIsLoged] = useContext(LoginContext); 
   

    const navegador = useNavigate()

    const handleInputChange = (e) => {
        console.log("inputchage")
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        console.log(formData)
    }

   
    const handleLogin = () => {
       console.log("handleLogin")
        easyFetch({
            url: "http://localhost:3000/API/v1/login",
            body: formData,
            method: "POST",
            callback: (data) => {
                console.log(" compruebo login", data)
                console.log("DATA",data)
                setLoged(data)

                if(Object.keys(data).length > 0){
                    alert("EXITO")
                    setIsLoged(true);
                    navegador("/home")
                    

                }else{
                    alert("Usuario incorrecto")
                }
                
                
            }
        })


    }

    return(<>
        <form action="#" method="POST">
            <label htmlFor="user">Usuario</label>
            <input  onChange={handleInputChange}  type="text" name="user" id="user" />
            <label htmlFor="pass">Contraseña</label>
            <input  onChange={handleInputChange}  type="password" name="pass" id="pass" />
      
        </form>
        <button  onClick={handleLogin} >Login</button>
        
    </>)
}

export default Login