import { useEffect, useRef, useState } from "react"


const ContadorRef = () => {

    const [inpuValue, setInputValue] = useState("pablo")
    const [count, setCount] = useState(0)

    const contador = useRef(0)

    useEffect(()=>{
       contador.current = contador.current+1
    })

    return (<>

        <h1>CONTADOR</h1>
        <input type="text" value={inpuValue} onChange={(e) => {
            setInputValue(e.target.value)
            // setCount(count + 1)


        }} placeholder="tu nombre" />


        Mi nombre es {inpuValue}
        <br></br>
        <span>Cantidad de renders: {contador.current}</span>


    </>)
}

export default ContadorRef