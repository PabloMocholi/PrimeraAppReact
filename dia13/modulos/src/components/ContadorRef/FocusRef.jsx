import { useRef } from "react"

const FocusRef = ()=>{
    const nameRef = useRef()

    const Focus = ()=>{
        console.log("focus")
        console.log(nameRef)
        nameRef.current.focus()
    }

    const Blur = ()=>{
        console.log("blur")
        nameRef.current.blur()

    }

const scrollToBoton = ()=>{
    nameRef.current.scrollIntoView({behavior:"smooth"})

}

    return(<>
    
    <section>
        {/* Scroll to Button */}
        <button onClick={scrollToBoton}>Bajar  </button>
        <div style={{marginBottom:"200000px"}}>
            Separador
        </div>



        <label htmlFor="">Ingresa tu nombre</label>
        <input ref={nameRef} type="text" name="name" id="name" />
        <button onClick={Focus}>Focus</button>
        <button onClick={Blur}>Blur</button>
    </section>
    </>)
}

export default FocusRef