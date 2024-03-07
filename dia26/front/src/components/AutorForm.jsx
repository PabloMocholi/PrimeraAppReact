import { useEffect, useState } from "react"
import { easyFetch } from "../../helpers/utils"
import { useNavigate } from "react-router-dom"

const AutorForm = ({ autor_info, setEditarAutor }) => {

    const [formData, setFormData] = useState(autor_info)

    const { id,autor} = formData

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }


    const handleUpdateBook = async () => {
        console.log("Nuevos datos", formData)
        easyFetch({
            url: "http://localhost:3000/API/v1/autores/" + id,
            method: "PUT",
            body: formData,
            callback: (data) => {
                console.log(" actualizado cn exito!", data)
                setEditarAutor(null)
            }
        })

    }

    return (<>
        <h2>Formulario</h2>
        <form className="main-form">
            <label htmlFor="">Nombre del autor:</label>
            <input required type="text"
                className="input-control"
                name="autor"
                value={autor}
                placeholder="Ingrese nombre autor"
                onChange={handleInputChange} />

        </form>

        <button onClick={handleUpdateBook}>Guardar</button>
   


    </>)
}
export default AutorForm