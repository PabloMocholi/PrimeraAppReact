import { useContext, useState, createContext } from "react"

const LoginContext = createContext([])

const LoginUseContext = () => {

    const [logIn, setLogIn] = useState(false)
    return (
    <LoginContext.Provider value={[logIn, setLogIn]}>

        <h1>soy Login</h1>
        El usuario esta {logIn ? "Si" : "No"}
        <Nav />

    </LoginContext.Provider>)
}

const Nav = () => {
    return (<>
        <section>
            <nav>
                soy NAV
                <LoginBoton />
            </nav>
        </section>
    </>)
}

const LoginBoton = () => {
    //const [logIn, setLogIn] = useState(false)
    const [logIn, setLogIn] = useContext(LoginContext)

    const handleLogin = () => {

        setLogIn(!logIn)
    }


    return (<>
        Estas logueado {logIn ? "si" : "no"}
        <button onClick={handleLogin}>
            Login/Logout
        </button></>)
}

export default LoginUseContext