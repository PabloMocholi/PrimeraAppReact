import { useContext } from "react"
import { Link } from 'react-router-dom'
import { LoginContext } from '../App';
import { useNavigate } from "react-router-dom"


const Navigation = () => {

    const { isLoged, setStatedLoged, userData, setUserData } = useContext(LoginContext);

    const navegador = useNavigate()



    function Logout() {
        setStatedLoged(false)
        navegador("/login")
    }

    return (<>
        <nav className='nav'>
            <ul>

                {
                    isLoged ? <>
                        <li>
                            <Link to="/home">Bienvenida</Link>
                        </li>
                        <li>
                            <Link to="/lista">Lista de Libros</Link>
                        </li>
                        <li>
                            <Link to="/autores">Lista Autores</Link>
                        </li>
                        {
                            userData.is_admin == 1 &&
                            <li>
                                <Link to="/agregar">Agregar</Link>
                            </li>
                        }

                        <li>
                            <Link to="/perfil">Perfil</Link>
                        </li>
                        <li> <button onClick={Logout}>Logout</button> </li></> :
                        <li><Link to="/login">Login</Link>
                        </li>
                }

            </ul>
        </nav>
    </>)
}

export default Navigation