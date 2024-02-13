import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Columns from './components/columns/Columns'
import Footer from './components/footer/Footer'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Columns/>
      <Footer/>
    </>
  )
}

export default App
