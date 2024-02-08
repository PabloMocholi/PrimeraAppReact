import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/components/Home'
import Contacto from './assets/components/Contacto'
import Acerca from './assets/components/Acerca'

function App() {

  const [paginaActual, setPagina] = useState("home")


  return (
    <>

      <nav>
        <button className={ `item important ${paginaActual === "home" ? 'active':""}`} onClick={() => {
          setPagina("home")
        }}>Home</button>
        <button className={paginaActual === "acerca" ? 'active':""}  onClick={() => {
          setPagina("acerca")
        }}>Acerca</button>
        <button className={paginaActual === "contacto" ? 'active':""}  onClick={() => {
          setPagina("contacto")
        }}>Contacto</button>
      </nav>
      {
        paginaActual === "home" && <Home />
      }
      {
        paginaActual === "acerca" && <Acerca />
      }
      {
        paginaActual === "contacto" && <Contacto />
      }

    </>
  )
}

export default App
