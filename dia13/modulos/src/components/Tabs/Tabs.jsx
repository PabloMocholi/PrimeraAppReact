import { useState } from "react"


const Tabs = () => {


    const [activeTab, setActiveTab] = useState(0);

    const handleActive = (tabIndex)=>{
        setActiveTab(tabIndex)
    }

    return (<>

        <section>
            {/* botonera */}
            <div>
                <button onClick={()=>handleActive(0)}> Tab1 </button>
                <button onClick={()=>handleActive(1)}> Tab2</button>
                <button onClick={()=>handleActive(2)}> Tab3 </button>
            </div>
            {/* content */}
            <div>
                {
                    activeTab == 0 && <div>Contenido de Tab 1</div>
                }
                {
                    activeTab == 1 && <div>Contenido de Tab 2</div>
                }{
                    activeTab == 2 && <div>Contenido de Tab 3</div>
                }

            </div>
        </section>
    </>)
}

export default Tabs