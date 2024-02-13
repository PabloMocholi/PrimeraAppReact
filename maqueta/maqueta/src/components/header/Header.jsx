import { pixar } from '../../db/db.js'
import './Header.css'

const { header } = pixar
const { h1, nav } = header

const Header = () => {
    return (<>
        <header className="Header">

            <Logo />
            <Nav />
        </header>


    </>)
}

const Logo = () => {
    const { href, src, title } = h1;
    return (<>
        <h1 className="Header-h1">
            <a href={href} className="Header-a">
                <img className="Header-img" src={src} alt={title} />
            </a>
        </h1></>)
}

const Nav = () => {

    return (<>
        <nav className="Header-nav">
            <ul className="Header-ul">
                {
                    nav.map((item) => {
                        return (<>
                         
                            <Li key={item.id} {...item}/>
                        </>)

                    })
                }


            </ul>
        </nav>
    </>)
}

const Li = (props) => {
    
    const {href,text} = props
    return (<>
        <li  className="Header-li">
            <a href={href}>{text}</a>
        </li>
    </>)
}

export default Header