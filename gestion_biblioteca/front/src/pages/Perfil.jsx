import { useState, useEffect, useContext } from "react"
import { LoginContext } from '../App';

const Perfil = ()=>{

    const {userData} = useContext(LoginContext);

    return(<>
    
    Perfil de {userData.usuario}
    </>)

}

export default Perfil