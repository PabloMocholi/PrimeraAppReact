const Mascota = () => {
    const name = "Lassy"
    const isCallejero = true;
    return (
        <>

            <div>
                <h3>Mascota</h3>
                nombre: {name}

                {
                    isCallejero 
                    ? (<div>"Está adopatada" </div>)
                    : (<div>"Es callejera"</div> )
                }
                {
                    isCallejero && <div>"Está adopatada" </div>
                }
                {
                    !isCallejero && <div>"Es callejera" </div>
                }


            </div>
        </>
    )
}

export default Mascota;