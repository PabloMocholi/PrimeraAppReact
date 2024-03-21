import { useState, useEffect } from "react"

import { easyFetch } from "../../helpers/utils"
import AutorForm from "../components/AutorForm"



const ListaAutores = () => {

    const [listaAutores, setListaAutores] = useState([])
    const [editarAutor, setEditarAutor] = useState(null)


    useEffect(() => {

        easyFetch({
            url: "http://localhost:3000/API/v1/autores",

            callback: (data) => {
                console.log(" recibo datos", data)
                //setListaLibros(data.data);
                setListaAutores(data)
            }
        })

    }, [editarAutor])

    const handleEditarAutor = (autor) => {
        console.log(`"ID AUTOR"${autor.id}`)
        setEditarAutor(autor)

    }


    return (<>
        <h1>Lista Autores</h1>
        {listaAutores &&
            listaAutores.map(autor => {
                return (<>

                    <div className="card" key={autor.id}>
                        <h3>{autor.autor}</h3>
                        <button onClick={() => handleEditarAutor(autor)}>Editar</button>


                    </div>
                </>)
            })
        }

        {editarAutor && <AutorForm key={editarAutor.id} autor_info={editarAutor} setEditarAutor={setEditarAutor} />}
    </>)
}

export default ListaAutores