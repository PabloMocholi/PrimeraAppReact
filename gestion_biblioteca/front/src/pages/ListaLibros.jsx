import { useState, useEffect } from "react"
import BookForm from "../components/BookForm"
import { easyFetch } from "../../helpers/utils"




const ListaLibros = () => {

    const [listaLibros, setListaLibros] = useState([])
    const [editarLibro, setEditarLibro] = useState(null)
    const [categorias, setCategoriasLibro] = useState([])

    const {userData} = useContext(LoginContext);

    useEffect(() => {
        //  fetchLibros();

        easyFetch({
            url: "http://localhost:3000/API/v1/libros",

            callback: (data) => {
                console.log(" recibo datos", data)
                //setListaLibros(data.data);
                setListaLibros(data)
            }
        })

    }, [editarLibro])
    /*
    const fetchLibros = async () => {
        try {
            const url = 'http://localhost:3000/API/v1/libros';
            const respose = await fetch(url);

            if (!respose.ok) {
                throw new Error('Error al obtener libros')
            }

            const data = await respose.json();
            setListaLibros(data.data);
        } catch (error) {
            console.log("ERROR:", error)
        }
    }*/

    const handleEditarLibro = (libro) => {
        console.log(`"ID LIBRO"${libro.id}`)
        setEditarLibro(libro)


        easyFetch({
            url: "http://localhost:3000/API/v1/librosCategorias/" + libro.id,

            callback: (data) => {
                console.log(" recibo datos", data)
                //setListaLibros(data.data);
                setCategoriasLibro(data)
                console.log(data)
            }
        })


    }


    const handleAlquilarLibro = (libro) => {
        console.log(`"ID LIBRO"${libro.id}`)
        setEditarLibro(libro)


        easyFetch({
            url: "http://localhost:3000/API/v1/librosCategorias/" + libro.id,

            callback: (data) => {
                console.log(" recibo datos", data)
                //setListaLibros(data.data);
                setCategoriasLibro(data)
                console.log(data)
            }
        })


    }


    return (<>
        <h1>
            Lista de libros
        </h1>
        <div className="cardList">
            {listaLibros &&
                listaLibros.map(libro => {
                    return (<>

                        <div className="card" key={libro.id}>
                            <h3>{libro.libro}</h3>
                            <strong>Autor: </strong>{libro.autor}
                            <span> Precio:  {libro.precio}</span>

                            <button onClick={() => handleEditarLibro(libro)}>Editar</button>
                            <button>Alquilar</button>
                        </div>
                    </>)
                })
            }
        </div>
        {editarLibro &&
            <>
                {
                    categorias &&
                    categorias.map(c => {

                        return (<> 
                        <span>{c.categoria}</span>
                        </>)

                    })

                }
                <BookForm key={editarLibro.id} libro_info={editarLibro} setEditarLibro={setEditarLibro} />

            </>
        }
    </>)
}

export default ListaLibros