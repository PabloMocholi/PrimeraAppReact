
import { useEffect, useState, createContext } from "react";
import { easyFetch } from "../../../helpers/utils.js"
import './productos.css'
import Carrito from "../carrito/carrito.jsx";

export const carritoContext = createContext([]);

const Productos = () => {

    const [productos, setProductos] = useState([])
    const [buscador, setBuscador] = useState("")
    const [filtro, setFiltro] = useState("")
    const [editarProducto, setEditarProducto] = useState({})
    const [formData, setFormData] = useState({})
    const [fetchRealizado, setFetchRealizado] = useState(false);

    const [carrito, setCarrito] = useState([])

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
                setEditarProducto("")
            }
        })

    }

    const addToCarrito = (producto) => {

        console.log("Carrito", producto)

        const index = carrito.findIndex(item => item._id === producto._id);


        if (index !== -1) {
            console.log("ya en carrito")
            const nuevoCarrito = [...carrito];

            if(producto.descuento == 0){
                nuevoCarrito[index] = {
                    ...nuevoCarrito[index],
                    nuevo_precio: (nuevoCarrito[index].nuevo_precio + nuevoCarrito[index].precio).toFixed(2),
                    cantidad: nuevoCarrito[index].cantidad + 1
                };

            }else{
                nuevoCarrito[index] = {
                    ...nuevoCarrito[index],
                    nuevo_precio: (parseFloat(nuevoCarrito[index].nuevo_precio) + parseFloat((producto.precio * (producto.descuento / 100)).toFixed(2))).toFixed(2),
                    cantidad: nuevoCarrito[index].cantidad + 1
                };

            }
          
            setCarrito(nuevoCarrito)



        } else {
            if(producto.descuento == 0)
                setCarrito([...carrito, { ...producto, cantidad: 1, nuevo_precio: producto.precio }])
            else
                setCarrito([...carrito, { ...producto, cantidad: 1, nuevo_precio: parseFloat((producto.precio * (producto.descuento / 100))).toFixed(2) }])

            console.log(carrito)
            
        }


    }


    return (<>

        <carritoContext.Provider value={{ carrito, setCarrito }}>

            <div className="PageProductos">
                <div>
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
                                        {
                                            producto.descuento == 0 ? <> <span>{producto.precio}</span><br /></> :
                                                <><span>{(producto.precio * (producto.descuento / 100)).toFixed(2)}</span><br /></>
                                        }
                                        <span>{producto.categoria}</span>
                                        <img src={producto.imagen} alt="" />
                                        <button onClick={() => editProducto(producto)}>Editar</button>
                                        <button onClick={() => addToCarrito(producto)}>Añadir a carrito</button>
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
                </div>

                <Carrito />
            </div>


        </carritoContext.Provider>
    </>)
}

export default Productos