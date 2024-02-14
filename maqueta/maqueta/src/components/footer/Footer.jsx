import { pixar } from '../../db/db.js'
import './Footer.css'

const { footer } = pixar
const { logos, enlaces, copyright,boton } = footer

const Footer = () => {

    return (<>
        <div className='DisplayFooter'>
            <Logos />
            <Enlaces />
            <Copyright />
            <Boton/>
        </div>

    </>)
}


const Logos = () => {

    return (<>
        <div className='Logos'>
            {
                logos.map((l, index) => {
                    return (
                        <>
                            <i key={index} className={`Logos-logo ${l}`} ></i>
                        </>
                    )

                })
            }
        </div>

    </>)
}

const Enlaces = () => {

    return (<>
        <div className='Enlaces'>
            {
                enlaces.map((e) => {
                    return (
                        <>
                            <Enlace {...e} />
                        </>
                    )

                })
            }
        </div>

    </>)


}
const Enlace = (props) => {
    const { text, href } = props
    return (<>
        <a className='Enlace-a' href={href}>
            <span className='Enlace-text'>{text}</span>
        </a>
    </>)
}


const Copyright = () => {

    return (<>

        <span>{copyright}</span>

    </>)

}

const Boton = ()=>{
    return(
        <>
        <button className='Footer-boton'>{boton}</button>
        </>
    )
}

export default Footer