import { useState } from 'react'
import './ToDo.css'

const listaTareas = [
    {
        id: 0,
        nombre: "Tarea 1",
        completada: false

    }, {
        id: 1,
        nombre: "Tarea 2",
        completada: true
    }, {
        id: 2,
        nombre: "Tarea 3",
        completada: false
    }
]
let cont = 2;

const ToDo = () => {

    const Tarea = ({ id, nombre, completada }) => {

        return (
            <>
                <div className='TarjetaTarea'>
                    <h1>{nombre}</h1>
                    {completada ? <span className='EstadoCompleta'>Estado: COMPLETADA</span> : <span className='EstadoINCompleta'>Estado: PENDIENTE</span>}
                    <br />
                    <button onClick={() => {
                        
                        let tareasNuevas = [...tareas]
                        let actual = tareasNuevas.findIndex((t)=> t.id == id)
                       // console.log(actual)

                        { tareasNuevas[actual].completada ? tareasNuevas[actual].completada = false : tareasNuevas[actual].completada = true }
                        console.log(tareasNuevas)
                        setTarea(tareasNuevas)
                    }}>Actualizar</button>
                    <button onClick={()=>{
                        let newLista = tareas.filter((tarea) =>(tarea.id != id))
                        setTarea(newLista)
                    }}>Eliminar</button>
                </div>
            </>
        )
    }


    const [tareas, setTarea] = useState(listaTareas)
    const [valorInput, setValorInput] = useState('');

    return (
        <>
            <h1>To-Do List</h1>
            <div>
                <input type="text" name="newTarea" id="newTarea" onChange={(e) => setValorInput(e.target.value)}/>
                <button onClick={()=>{
                    cont++
                    setTarea([...tareas,{id:cont, nombre:valorInput, completada:false} ])
                    console.log(tareas)

              
                  
                }}>Añadir</button>
            </div>
            <div className='DisplayTarjetas'>
                {
            
                    tareas.map((tarea) => {
                        return (
                            <Tarea {...tarea} key={tarea.id} />

                        )
                    })
                 
                }</div>
           
               
        </>)

}



export default ToDo