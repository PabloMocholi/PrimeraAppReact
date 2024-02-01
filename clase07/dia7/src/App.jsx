import Alumno from "./components/Alumno/Alumno"
import Article from "./components/Article/Article"
import Mascota from "./components/Mascota/Mascota"
import Menu from "./components/Menu/Menu"



function App() {

  return (
    <>
      <Menu items ={["Inicio","Contacto","Productos","Login"]}/>
      <h2>Hola</h2>
      <Alumno curso="FullStack" nombre="María" />
      {/* <Alumno curso="Diseño gráfico" nombre="Pedro"/>
      <Alumno curso="Diseño Web" nombre="Toni"/> */}

      <Mascota/>

      <Article title="Título de mi artículo">
        <h3>Subtítulo</h3>
        <p>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Fusce a accumsan justo.
          Quisque eu hendrerit nibh, non tempus erat. Quisque lobortis velit
          tempus ipsum luctus ullamcorper. Nam lobortis nunc sed erat congue
          vestibulum. Nulla consequat purus et lorem ultrices finibus. Duis ut ipsum odio.
          Morbi et volutpat metus. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas.

        </p>
      </Article>
    </>
  )
}

export default App
