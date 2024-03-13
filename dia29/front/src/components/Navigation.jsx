import { useContext } from "react"
import { Link } from 'react-router-dom'
import { LoginContext } from '../App';
import { useNavigate } from "react-router-dom"


const Navigation = () => {
    const [isLoged, setIsLoged] = useContext(LoginContext);
    const navegador = useNavigate()

    function Logout() {
        setIsLoged(false)
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
                        <li>
                            <Link to="/agregar">Agregar</Link>
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