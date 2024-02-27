import { useEffect, useState } from "react"

const BookForm = ({ libro }) => {

    const [formData, setFormData] = useState(libro)

    const { id, titulo, autor, categoria } = formData

    useEffect(()=>{
        setFormData(libro)
    },[libro])


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log("Entrando al form con react")

        try{

            const url = "http://localhost:3000/API/v1/libros/"+id;
            const respose = await fetch(url, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)

            })

            if(!respose.ok){
                throw new Error("ERROR al enviar")
            }

            const resposeData = await respose.json()
            console.log(resposeData)


        }catch(error){
            
        }
    }

    return (<>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit} className="main-form" action="" method="">
            <label htmlFor="">Nombre del libro:</label>
            <input type="text"
                className="input-control"
                name="titulo"
                value={titulo}
                placeholder="Ingrese titulo del libro"
                onChange={handleInputChange} />
            <br />
            <label htmlFor="">Autor:</label>
            <input type="text"
                className="input-control"
                name="autor"
                value={autor}
                placeholder="Ingrese autor del libro"
                onChange={handleInputChange} />
            <br />
            <label htmlFor="">Categoría:</label>
            <input type="text"
                className="input-control"
                name="categoria"
                value={categoria}
                placeholder="Ingrese categoria del libro"
                onChange={handleInputChange} />
            <br />
            <button type="submit"> Guardar </button>
        </form>


    </>)
}
export default BookForm