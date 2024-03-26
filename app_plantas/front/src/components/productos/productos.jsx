
import { useEffect, useState } from "react";
import { easyFetch } from "../../../helpers/utils.js"


const Productos = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetchLibros();
    }, []); // Agregar editarLibro como dependencia


    const fetchLibros = () => {
        easyFetch({
            url: "http://localhost:3000/productos",

            callback: (data) => {
                console.log(" recibo datos", data)
                //setListaLibros(data.data);
                setProductos(data)
            }
        })

    }
    return (<>
   
        {
            productos && productos.map((producto) => {

                return (<>

                    <div>
                        <span>{producto.titulo}</span><br />
                        <span>{producto.precio}</span><br />
                        <img src={producto.imagen} alt="" />
                    </div>
                    <button>delete</button>
                    <button>update</button>


                </>)

            })
        }
    </>)
}

export default Productos