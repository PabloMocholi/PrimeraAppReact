import { useState } from "react"
import './Menu.css'


const Menu = () => {

    const items = [
        {
            titulo: "Home",
            href: "#"
        }, {
            titulo: "Contacto",
            href: "#"
        }, {
            titulo: "Productos",
            href: "#"
        }
    ]

    const [isOpen, setOpen] = useState(false)

    const ToggleMenu = () => {

        setOpen(!isOpen)
    }

    return (<>

        <header className="Header">

            <h1 className="Header-logo">Logo</h1>
            
                <nav className={`Header-nav ${isOpen ? "isVisible": ""}`}>
                    <ul className="Header-ul">
                        {
                            items.map((item, index) => {

                                return (<>
                                    <Li key={index} {...item} />

                                </>)
                            })
                        }
                    </ul>
                </nav>
            

            {/* Boton Responsive */}
            <button onClick={ToggleMenu} className="Header-boton">Icono Boton</button>

        </header>
    </>)
}

const Li = ({ titulo, href }) => {
    //const {titulo, href} = props
    return (
        <>
            <li className="Header-li" >{titulo}</li>

        </>
    )
}

export default Menu