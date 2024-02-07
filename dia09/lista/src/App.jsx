import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import ToDo from './components/ToDo/ToDo'

const listaTareas = [
  {
      "id": 0,
      "nombre": "Tarea 1",
      "completada": false

  }, {
      "id": 1,
      "nombre": "Tarea 2",
      "completada": true
  }, {
      "id": 2,
      "nombre": "Tarea 3",
      "completada": false
  }
]

function App() {

  // const[contador,setContador] = useState(0);
  //treame info de la BBDD
 
  useEffect(()=>{
   // console.log("Cargué App.js")
    setTimeout(()=>{
      fetchData();
    
    },1000)
    
  },[])


  const fetchData = async()=>{
    const respuesta = await fetch("./api/datos.json"); //pedimos los datos
    const jsonData = await respuesta.json(); //convertimos

    //console.log(jsonData);
    setData(jsonData)
    setIsLoading(false);
  }
  
  const[isLoading, setIsLoading] = useState(true)
  const[data, setData] = useState([]) //guardar lista de tareas


  return (
    <>
    
      {isLoading? <p>CARGANDO DATOS</p> :  <ToDo listaTareas = {data} /> }
      {/* <button onClick={()=>{setContador(contador+1)}}>CONTADOR</button> */}
      
    </>
  )
}

export default App

