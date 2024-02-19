import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  const getApi = async () => {
    const controller = new AbortController();
    let opciones = {
      method: 'GET', // POST, PUT, DELETE, etc
      mode: 'cors', // no-cors, same-origin, cors
      signal: controller.signal, // para abortar la petición
      headers: {
        'Content-Type': 'application/json'
      },
      
    }


    fetch('https://jsonplaceholder.typicode.com/users',opciones)
      .then(function (response) {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setUsers(data)
      })
      .finally(()=>{
        controller.abort(); 
      })
  };

  useEffect(() => {
    getApi()
  }, [])

  return (
    <>
      <h1>Llamada API</h1>
      {
        users.map(user => {
          return (<>
            <div className='User'>
              <span><b>Name: </b>{user.name}</span>

              <span><b>Username: </b>{user.username}</span>
              <span><b>E-mail: </b>{user.email}</span>


            </div></>)

        })
      }
    </>
  )
}

export default App
