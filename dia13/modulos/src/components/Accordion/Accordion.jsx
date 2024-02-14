import { useState } from "react"


const Accordion = ({ items }) => {

    console.log(items)
    const[activeItem, setActiveItem] = useState(1)


    const handleActiveAccordion = (AccordionId)=>{
        setActiveItem(AccordionId)
    }       

    return (<>
        <section className="Accordion">
            {items.map((item) => {
                return (<>
                    <div className="Accordion-div" key={item.id}>
                        <button onClick={()=>handleActiveAccordion(item.id)} className="Accordion-btn">{item.titulo}</button>
                        {
                            activeItem == item.id &&  <div>{item.contenido}</div>
                        }
                      
                    </div>
                </>)


            })}

        </section>
    </>)
}
export default Accordion