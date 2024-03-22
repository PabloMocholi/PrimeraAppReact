import { useState, useEffect, useContext } from "react"
import { easyFetch } from "../../helpers/utils"
import { useNavigate } from "react-router-dom"
import { LoginContext } from '../App';
import './Login.css'


const Login = () => {

    const [formData, setFormData] = useState({})

    const {isLoged, setStatedLoged, setUserData} = useContext(LoginContext);


    const navegador = useNavigate()

    const handleInputChange = (e) => {
        console.log("inputchage")
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        console.log(formData)
    }

    const handleLogin = (event) => {
        event.preventDefault();  
        console.log("handleLogin")
        easyFetch({
            url: "http://localhost:3000/API/v1/login",
            body: formData,
            method: "POST",
            callback: (data) => {
                console.log(" compruebo login", data)
               //console.log("DATA", data.data[0].usuario)
    
                if (data.status == "ok") {
                    alert("EXITO")
                    setStatedLoged(true);
                    setUserData({
                        id:  data.data[0].id,
                        usuario:  data.data[0].usuario,
                        is_admin: data.data[0].is_admin})
                    navegador("/home")
                } else {
                    alert("Usuario incorrecto")
                }
            }
        })
    }

    const handleRegister = (event) => {
        
        console.log("handleLogin")
        easyFetch({
            url: "http://localhost:3000/API/v1/register",
            body: formData,
            method: "POST",
            callback: (data) => {
                console.log("usuario registrado", data)
    
            }
        })
    }
    
    return (
        <>
            <div className="Login">
                <form className="form" onSubmit={handleLogin} action="#" method="POST">
                    <label htmlFor="user">Usuario</label>
                    <input onChange={handleInputChange} type="text" name="user" id="user" />
                    <label htmlFor="pass">Contraseña</label>
                    <input onChange={handleInputChange} type="password" name="pass" id="pass" />
                    <button className="button" type="submit">Login</button> 
                </form>
            </div>

            <button onClick={handleRegister} className="button" type="submit">Register</button> 
        </>
    )
}

export default Login