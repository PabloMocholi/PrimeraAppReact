import { createContext, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import './App.css'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Agregar from './components/Agregar'
import ListaLibros from './components/ListaLibros'
import ListaAutores from './components/ListaAutores'
import Login from './components/Login'
import { useNavigate } from "react-router-dom"

function App() {

  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/login' element={<Login />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path='/lista' element={<ListaLibros />}></Route>
        <Route path='/agregar' element={<Agregar />}></Route>
        <Route path='/autores' element={<ListaAutores />}></Route>

        <Route path='/logout' element={<Login />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Route>

    </Routes>
  )
}

export const LoginContext = createContext([]);


function Layout() {
  const [isLoged, setStatedLoged] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    
    if (!isLoged) {
    
      navigate('/login');
    }
  }, [isLoged]);

  return (<>
    <LoginContext.Provider value={[isLoged, setStatedLoged]}>
      <Navigation />
      <div className='content '>
        <Outlet />
      </div>

      <footer className='footer'>footer</footer>
    </LoginContext.Provider>
  </>)
}



export default App
