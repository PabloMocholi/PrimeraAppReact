import { useState, useEffect } from "react"
import BookForm from "../components/BookForm"
import { easyFetch } from "../../helpers/utils"
import { useContext } from "react"
import { LoginContext } from '../App';



const ListaLibros = () => {

    const [listaLibros, setListaLibros] = useState([])
    const [editarLibro, setEditarLibro] = useState(null)
    const [categorias, setCategoriasLibro] = useState([])


    const { userData } = useContext(LoginContext);

    const { VITE_URL } = import.meta.env;


    useEffect(() => {
        fetchLibros();
    }, [editarLibro]); // Agregar editarLibro como dependencia


    const fetchLibros = () => {
        easyFetch({
            url: "http://localhost:3000/API/v1/libros",

            callback: (data) => {
                console.log(" recibo datos", data)
                //setListaLibros(data.data);
                setListaLibros(data)
            }
        })

    }

    // useEffect(() => {
    //     //  fetchLibros();

    //     easyFetch({
    //         url: "http://localhost:3000/API/v1/librosAlquilados/"+ userData.id,

    //         callback: (data) => {
    //             console.log(" recibo datos", data)
    //             //setListaLibros(data.data);
    //             setLibrosAlquilados(data)
    //         }
    //     })

    // }, [])



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
        console.log(`"ID LIBRO"${libro.id}, ID_USUARIO ${userData.id}`)


        easyFetch({
            url: VITE_URL + "/alquilarLibros",
            method: "POST",
            body: { id_user: userData.id, id_libro: libro.id },

            callback: (data) => {
                console.log(" recibo datos", data)

                if(data.status == "error")
                    alert("no es posible alquilar más")
                fetchLibros()


                //console.log(data)
            }
        })


    }

    const handleDevolverLibro = (libro) => {
        console.log(`"ID LIBRO"${libro.id}, ID_USUARIO ${userData.id}`)


        easyFetch({
            url: VITE_URL + "/devolverLibro",
            method: "POST",
            body: { id_user: userData.id, id_libro: libro.id },

            callback: (data) => {
                console.log(" recibo datos", data)
                fetchLibros()



                //console.log(data)
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
                            {
                                userData.is_admin &&
                                <button onClick={() => handleEditarLibro(libro)}>Editar</button>
                            }
                            
                            {
                                libro.id_usuario == userData.id &&
                                <button onClick={() => handleDevolverLibro(libro)}>Devolver</button>

                            }{
                                libro.fecha_inicio == null &&
                                <button onClick={() => handleAlquilarLibro(libro)}>Alquilar</button>
                            }

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