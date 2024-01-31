import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from "./components/boton"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulo />
      <Div texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper, nisi in euismod commodo, felis purus rutrum dolor, non euismod velit leo egestas purus. Integer laoreet eget justo eu luctus. Maecenas aliquet commodo risus sed venenatis. Mauris at odio ac justo tempor cursus. Vestibulum vehicula enim in enim laoreet, blandit posuere sem viverra. Quisque vulputate nunc vitae orci iaculis, at vulputate justo lacinia. In ipsum urna, accumsan facilisis imperdiet ac, blandit ac lorem. Cras feugiat aliquam eleifend. Mauris sed turpis dui. In ac ante tellus. In vitae metus ipsum. Aliquam sagittis vitae neque eu ultrices. Nulla non urna efficitur, egestas sem et, feugiat ex. Praesent euismod risus quis ante malesuada, vitae scelerisque neque posuere. Etiam id viverra nibh, ac dignissim diam. Morbi volutpat turpis eget massa lobortis fermentum."/>
      <Boton />
    </>
  )
}

function Titulo(){
  return(<h1  className="miTit" >Primera página con REACT</h1>)
}
function Div({texto}){
  return(<div>{texto}</div>)
}
export default App
