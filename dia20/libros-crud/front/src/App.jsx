import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/lista' element={<ListaDeLibros />}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>
      </Route>

    </Routes>
  )
}

function Layout() {
  return (<>
    <header>soy header</header>
    <nav>

      <ul>
        <li>
          <Link to="/home">Bienvenida</Link>
        </li>
        <li>
          <Link to="/lista">Lista de Libros</Link>
        </li>
        <li>
          <Link to="/contacto">Contactos</Link>
        </li>
      </ul>
    </nav>
   
    <Outlet />
    <footer>footer</footer>
  </>)
}

function Home() {
  return (<>
    <h1>
      Home de nuestra librería
    </h1>
  </>)
}

function Contacto() {
  return (<>
    <h1>
      Contacto de nuestra librería
    </h1>
  </>)
}

function ListaDeLibros() {
  return (<>
    <h1>
      Lista de libros
    </h1>
  </>)
}

export default App
