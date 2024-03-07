import BookForm from "./BookForm"

const Agregar = () => {

    const emptyBook ={
        id:0,
        libro:"",
        autor:"",
        precio:""
    }

    return (<>
      
            <h1>
                Agregar libro nuevo
            </h1>
            <BookForm libro_info={emptyBook}/>
    </>)
}

export default Agregar