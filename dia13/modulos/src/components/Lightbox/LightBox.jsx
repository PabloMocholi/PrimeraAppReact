import { useState } from "react"
import './LightBox.css'

const LightBox = () => {

    const [isOpen, setOpen] = useState(false)

    const ToggleActive = () => {
        setOpen(!isOpen);
    }

    return (<>
        <div>
            <button onClick={ToggleActive}>Abrir LightBox</button>
            {isOpen &&
                <div>
                    <div className="LightBox-backDrop">  </div>
                    <h3>Contenido del lightBox</h3>
                    <button onClick={ToggleActive}>cerrar</button>

                </div>
            }

        </div>
    </>)
}

export default LightBox