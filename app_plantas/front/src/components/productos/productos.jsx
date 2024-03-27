
import { useEffect, useState } from "react";
import { easyFetch } from "../../../helpers/utils.js"
import './productos.css'


const Productos = () => {

    const [productos, setProductos] = useState([])
    const [buscador, setBuscador] = useState("")
    const [filtro, setFiltro] = useState("")
    const [editarProducto, setEditarProducto] = useState({})
    const [formData, setFormData] = useState({})
    const [fetchRealizado, setFetchRealizado] = useState(false);

    useEffect(() => {
        if (!fetchRealizado) { // Verificar si el fetch ya se ha realizado
            fetchProductos();
        }
    }, [fetchRealizado]);

    useEffect(() => {
        setFormData(editarProducto);
        console.log(formData)
    }, [editarProducto]);



    const handleInputChange = (e) => {
        const { name, value } = e.target
        setEditarProducto({ ...editarProducto, [name]: value });
    }



    const fetchProductos = () => {
        easyFetch({
            url: "http://localhost:3000/productos",

            callback: (data) => {
                console.log(" recibo datos", data)
                //setListaLibros(data.data);
                setProductos(data)
                setFetchRealizado(true);
            }
        })

    }


    const actualizoBuscador = (e) => {
        setBuscador(e.target.value);
    }

    const actualizarFiltro = (filtro) => {
        setFiltro(filtro)
    }

    const editProducto = (producto) => {
        setEditarProducto(producto)
        console.log(editarProducto)

    }

    const cerrarEdicion = () => {
        setEditarProducto({})
    }

    const productosFiltrados = productos.filter((producto) => {

        if (filtro == "")
            return (producto.titulo.toLowerCase().includes(buscador.toLowerCase()))
        else if (filtro == "plantas")
            return (producto.titulo.toLowerCase().includes(buscador.toLowerCase()) && producto.categoria === "Plantas")
        else if (filtro == "animales")
            return (producto.titulo.toLowerCase().includes(buscador.toLowerCase()) && producto.categoria === "Animales")
        else
            return (producto.titulo.toLowerCase().includes(buscador.toLowerCase()) && producto.categoria === "Decoracion")


    }

    );

    const handleUpdateBook = async (id) => {
        console.log(id)
        easyFetch({
            url: "http://localhost:3000/producto/" + id,
            method: "PUT",
            body: formData,
            callback: (data) => {
                console.log(" actualizado con exito!", data)
                setFetchRealizado(false)
               
            }
        })

    }


    return (<>

        <input type="text" name="buscador" id="buscador" placeholder="Buscador" onChange={actualizoBuscador} />
        <button onClick={() => actualizarFiltro("animales")}>Animales</button>
        <button onClick={() => actualizarFiltro("plantas")}>Plantas</button>
        <button onClick={() => actualizarFiltro("decoracion")}>Decoracion</button>
        {filtro != "" && <button onClick={() => actualizarFiltro("")} >Quitar filtro</button>}
        <div className="Productos">
            {
                productos && productosFiltrados.map((producto) => {

                    return (<>

                        <div className="Producto">
                            <span>{producto.titulo}</span><br />
                            <span>{producto.precio}</span><br />
                            <span>{producto.categoria}</span>
                            <img src={producto.imagen} alt="" />
                            <button onClick={() => editProducto(producto)}>Editar</button>
                        </div>


                    </>)

                })
            }</div>

        {
            Object.keys(editarProducto).length > 0 && <>

                <div>
                    <span onClick={cerrarEdicion}>Cerrar </span>
                    <form className="main-form">
                        <label htmlFor="titulo">Nombre del producto</label>
                        <input required type="text"
                            className="input-control"
                            name="titulo"
                            value={editarProducto.titulo}
                            placeholder="Ingrese titulo del producto"
                            onChange={handleInputChange}
                        />
                        <br />



                    </form>
                    <button onClick={() => handleUpdateBook(editarProducto._id)}>Guardar</button>

                </div>
            </>
        }
    </>)
}

export default Productos