import BookForm from "./BookForm"

const Agregar = () => {

    const emptyBook ={
        id:0,
        titulo:"",
        autor:"",
        categoria:""
    }

    return (<>
      
            <h1>
                Agregar libro nuevo
            </h1>
            <BookForm libro={emptyBook}/>
    </>)
}

export default Agregar