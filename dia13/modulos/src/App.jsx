import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'
import Tabs from './components/Tabs/Tabs'
import Accordion from './components/Accordion/Accordion'
import LightBox from './components/Lightbox/LightBox'
import Slider from './components/Slider/Slider'
import ContadorRef from './components/ContadorRef/ContadorRef'
import FocusRef from './components/ContadorRef/FocusRef'
import LoginUseContext from './components/LoginUseContext'

function App() {
  const [count, setCount] = useState(0)

  const slider = ["image1.jpg","image2.jpg","image3.jpg"]


  const items = [
    {
      id: 1, titulo: "Pregunta 1", contenido: "Contenido pregunta 1"
    }, {
      id: 2, titulo: "Pregunta 2", contenido: "Contenido pregunta 2"
    }, {
      id: 3, titulo: "Pregunta 3", contenido: "Contenido pregunta 3"
    }
  ]

  return (
    <>
      <Menu />
      {/* Tabuladores, Accordeon, lightBox, Slider */}
      <Tabs />
      <Accordion items = {items} />
      <LightBox/>
      <Slider items = {slider}/><br></br>
      <ContadorRef/><br></br><br></br>
      <FocusRef/>
      <LoginUseContext/>
    </>
  )
}

export default App
