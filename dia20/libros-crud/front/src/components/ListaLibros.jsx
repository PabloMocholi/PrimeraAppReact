import { useState, useEffect } from "react"
import BookForm from "./BookForm"




const ListaLibros = () => {

    const [listaLibros, setListaLibros] = useState([])
    const [editarLibro, setEditarLibro] = useState(null)

    useEffect(()=>{
        fetchLibros();
    },[])


    const fetchLibros = async()=>{
        try{
            const url = 'http://localhost:3000/API/v1/libros';
            const respose = await fetch(url);

            if(!respose.ok){
                throw new Error('Error al obtener libros')
            }

            const data = await respose.json();
            setListaLibros(data.data);
        }catch(error){
            console.log("ERROR:", error  )
        }
    }

    const handleEditarLibro = (libro)=>{
        console.log(`${libro.id}`)
        setEditarLibro(libro)
       
    }


    return (<>
        <h1>
            Lista de libros
        </h1>
        <div className="cardList">
            {
                listaLibros.map( libro =>{
                    return(<>
                    
                        <div className="card" key={libro.id}>
                            <h3>{libro.titulo}</h3>
                            <strong>Autor: </strong>{libro.autor}
                            <strong>Categoría: </strong>{libro.categoria}
                            <button onClick={()=>handleEditarLibro(libro)}>Editar</button>
                        </div>
                    </>)
                })
            }
        </div>
        {editarLibro && <BookForm libro={editarLibro}/>}
    </>)
}

export default ListaLibros