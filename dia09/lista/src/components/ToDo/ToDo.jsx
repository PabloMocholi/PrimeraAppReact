import { useState, useEffect } from 'react'
import './ToDo.css'
import Confetti from 'react-confetti'

// const listaTareas = [
//     {
//         "id": 0,
//         "nombre": "Tarea 1",
//         "completada": false

//     }, {
//         "id": 1,
//         "nombre": "Tarea 2",
//         "completada": true
//     }, {
//         "id": 2,
//         "nombre": "Tarea 3",
//         "completada": false
//     }
// ]


const ToDo = ({listaTareas}) => {


    const [tareas, setTarea] = useState(listaTareas)
    const [valorInput, setValorInput] = useState('');
    const [cont, setCont] = useState(3)


    const agregarTarea = () => {

        if (valorInput) {
            setCont(cont + 1)
            console.log(cont)
            setTarea([...tareas, { id: cont, nombre: valorInput.trim(), completada: false }])
        }

        //console.log(tareas)
    }
    const quitarTarea = (id) => {
        let tareasNuevas = tareas.filter((tarea) => (tarea.id != id))
        setTarea(tareasNuevas)
    }

    const actualizarTarea = (id) => {

        let tareasNuevas = [...tareas]
        let actual = tareasNuevas.findIndex((t) => t.id == id)
        // console.log(actual)

        //{ tareasNuevas[actual].completada ? tareasNuevas[actual].completada = false : tareasNuevas[actual].completada = true }
        tareasNuevas[actual].completada = !tareasNuevas[actual].completada
        console.log(tareasNuevas)
        setTarea(tareasNuevas)
    }



    const Tarea = ({ id, nombre, completada }) => {

        return (
            <>
                <div className='TarjetaTarea'>
                    <h1>{nombre}</h1>
                    {completada ? <span className='EstadoCompleta'>Estado: COMPLETADA</span> : <span className='EstadoINCompleta'>Estado: PENDIENTE</span>}
                    <br />
                    <button onClick={() => actualizarTarea(id)}>Actualizar</button>



                    <button onClick={() => quitarTarea(id)}>Eliminar</button>
                </div>
            </>
        )
    }

    return (
        <>
            <h1>To-Do List</h1>
            <div>
                <input type="text" name="newTarea" id="newTarea" value={valorInput} onChange={(e) => setValorInput(e.target.value)} />
                <button onClick={agregarTarea}>Añadir</button>
            </div>
            <h4>Completas</h4>
            <div className='DisplayTarjetas'>
                {
                    tareas.filter((tarea) => tarea.completada == true).length == 0 && <>
                        <h2>PONTE LAS PILAS! Ninguna tarea completa</h2></>
                }
                {

                    tareas.map((tarea) => {
                        if (tarea.completada) {
                            return (
                                <Tarea {...tarea} key={tarea.id} />

                            )
                        }

                    })

                }</div>
            <h4>Pendientes</h4>
            <div className='DisplayTarjetas'>
                {
                    tareas.filter((tarea) => tarea.completada == false).length == 0 &&<>
                    <h2>GENIAL! No hay pendientes</h2>
                    <Confetti numberOfPieces="1000" recycle={false}/>
                    </> 
                }
                {

                    tareas.map((tarea) => {
                        if (!tarea.completada) {
                            return (
                                <Tarea {...tarea} key={tarea.id} />

                            )
                        }
                    })

                }</div>


        </>)

}



export default ToDo