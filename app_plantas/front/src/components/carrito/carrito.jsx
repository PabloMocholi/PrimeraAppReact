import { useContext } from "react";
import { carritoContext } from "../productos/productos"
import './carrito.css'
import { easyFetch } from "../../../helpers/utils";

const Carrito = () => {


    const { carrito, setCarrito } = useContext(carritoContext);
    const eliminarElemento = (producto)=>{
        const index = carrito.findIndex(item => item._id === producto._id);

        const nuevoCarrito = [...carrito];

        if(producto.cantidad - 1 != 0){
            if(producto.descuento == 0){

                nuevoCarrito[index] = {
                    ...nuevoCarrito[index],
                    nuevo_precio: (nuevoCarrito[index].nuevo_precio - nuevoCarrito[index].precio).toFixed(2),
                    cantidad: nuevoCarrito[index].cantidad - 1
                };
    
            }else{
    
                nuevoCarrito[index] = {
                    ...nuevoCarrito[index],
                    nuevo_precio: (nuevoCarrito[index].nuevo_precio - ( nuevoCarrito[index].precio * ( nuevoCarrito[index].descuento / 100))).toFixed(2),
                    cantidad: nuevoCarrito[index].cantidad - 1
                };
            }
        }else{
            nuevoCarrito.splice(index,1)
        }

      

      
        setCarrito(nuevoCarrito)
        console.log("Carrito final",carrito)

    }

    const handlePostCarrito = ()=>{
        console.log(carrito)
        const totalPrecio = carrito.reduce((accumulator, producto) => accumulator + parseFloat(producto.nuevo_precio), 0).toFixed(2)
        easyFetch({
            url: "http://localhost:3000/carrito/",
            method: "POST",
            body: [carrito,totalPrecio],
            callback: (data) => {
                console.log(" compra realizada!", data)
                setCarrito([])
            }
        })
    }

    return (<>
        <div className="Carrito">
            CARRITO
            {
                carrito.length > 0 && carrito.map((producto) => {
                    return (<>
                        <span>{producto.titulo}</span>
                        <span>{producto.nuevo_precio}</span>
                        <span>{producto.cantidad}</span>
                        <button onClick={()=> eliminarElemento(producto)} >Eliminar </button>
                    </>)
                })
            }
            {
                carrito.length >  0 ? <>
                <span>Total: { carrito.reduce((accumulator, producto) => accumulator + parseFloat(producto.nuevo_precio), 0).toFixed(2)}</span>
                <button onClick={handlePostCarrito}>Terminar y pagar</button>
                </>:
                <button disabled>Terminar y pagar</button>
            }
            
        </div>

    </>)
}

export default Carrito