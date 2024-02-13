import './Hero.css'
import { pixar } from '../../db/db.js'

const Hero = () => {
    const { hero } = pixar
    const { id, background_image, image } = hero


    return (<>

        <div className='Hero' style={{ backgroundImage: `url(${background_image})` }} >
            <Imagen key={id} image={image}/>
        </div>

    </>)
}
export default Hero

const Imagen = ({image}) => {
    return (<>

        <img className='Hero-image' src={image} alt="" />

    </>)
}

