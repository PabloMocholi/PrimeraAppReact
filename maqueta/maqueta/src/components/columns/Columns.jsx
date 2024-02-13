import { pixar } from '../../db/db.js'
import './Columns.css'

const { columns } = pixar

const Columns = () => {

    return (<>
        <div className='Columns'>
    
            {
                columns.map((c)=>{
                    return(<>
                        {console.log(c)}
                       <Column key={c.id}{...c} />
                    </>)
                 
                })
            } 

        </div>

    </>)

}

const Column = (props) => {
    const { image, text } = props
    console.log(image)

    return (<>

        <div className='Columns-column'>
            <img className='Columns-image'  src={image} alt={text} />
            <span className='Columns-text'>{text}</span>
        </div>

    </>)
}


export default Columns

