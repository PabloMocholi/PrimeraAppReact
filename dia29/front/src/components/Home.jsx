import { useContext } from 'react';
import Login from "./Login";
import { LoginContext } from '../App'; 


function Home() {

    const [isLoged] = useContext(LoginContext);
    const {VITE_NAME} = import.meta.env;  
    return (<>
      <h1>
        Home de {VITE_NAME}
      </h1>
     
    </>)
  }

  export default Home;