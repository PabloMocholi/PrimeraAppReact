import "./Alumno.css";

const Alumno = ({curso,nombre}) => {
    //(props) => {
    //let{curso, nombre} = props;

    return (
        <>
            <div className="alumno"> 
                <h2>¡Hola! soy {nombre}</h2>
                <p>Estoy cursando: {curso}</p>
            </div>
        </>
    )
}

export default Alumno

