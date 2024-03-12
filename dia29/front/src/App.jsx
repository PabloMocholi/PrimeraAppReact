import { useState } from 'react'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/lista' element={<ListaLibros />}></Route>
        <Route path='/agregar' element={<Agregar />}></Route>
        <Route path='/autores' element={<ListaAutores />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Route>

    </Routes>
  )
}


function Layout() {
  return (<>

    <Navigation />
    <div className='content '>
      <Outlet />
    </div>

    <footer className='footer'>footer</footer>
  </>)
}



export default App
