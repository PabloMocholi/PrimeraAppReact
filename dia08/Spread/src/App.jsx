import { useState, useEffect } from 'react'


function App() {
  // const [count, setCount] = useState(0)

  const props = {
    prop1: "valor1",
    prop2: "valor2",
    prop3: "valor3",
    prop4: "valor4"
  }

  const ListaAnimales = [
    {
      id: 1,
      nombre: "Toby",
      tipo: "perro",
      color: "marrón",
      datos: ["muy perezoso", "mimoso"],
    }, {
      id: 2,
      nombre: "Zarpitas",
      tipo: "gato",
      color: "gris"
    }, {
      id: 3,
      nombre: "Glu Glu",
      tipo: "pez",
      color: "naranja"
    }
  ]



  let [miVaribale, setMiVariable] = useState(25);
  const [animales, setAnimales] = useState(ListaAnimales);

  // useEffect(() => {
  //   const user = {
  //     user: "Laura",
  //     edad: 25,
  //     domicilio: {
  //       ciudad: "vlc",
  //       cp: 14036
  //     }
  //   }

  //   const texto = JSON.parse(JSON.stringify(user)); //copia de todo mi objeto incluyendo subniveles

  //   const userCopy = user //apuntan al mismo sitio en memoria, cambiar uno afecta al otro

  //   let newUserCopy = { ...user } //shallow copy de user

  //   const semana = ["lunes", "martes", "miercoles"]
  //   let newSemanaCopy = [...semana, "jueves", "viernes"]
  //   newSemanaCopy = ["sabado", "domingo", ...newSemanaCopy]

  //   console.log("user:", user)
  //   console.log("userCopy:", userCopy)


  //   function mostrarVerduras(verdura1, verdura2) {
  //     console.log([verdura1, verdura2])
  //   }

  //   mostrarVerduras("Lechuga", "Zanahoria")

  //   function mostrarVerdurasSpread(...datos) {
  //     console.log(datos)
  //   }

  //   mostrarVerdurasSpread("Lechuga", "Zanahoria", "Calabaza")
  //   mostrarVerdurasSpread("Lechuga", "Zanahoria")

  // })

  const Componente = ({ prop1, prop2 }) => {
    return (
      <>
        <h1>soy un componente</h1>
        <ul>
          <li>prop1:{prop1}</li>
          <li>prop2:{prop2}</li>
        </ul>
      </>)
  }

  const Animal = ({ nombre, tipo, color, datos = ["no tiene"] }) => {

    const listaItems = datos.map((d, index) => (
      <li key={index}>{d}</li>
    ));

    return (
      <>
        <h1>Ficha de {nombre}</h1>
        <p>Es un {tipo} de color {color}</p>
        <div>
          <h2>Datos relevantes</h2>
          <ul>
            {listaItems}
          </ul>
        </div>
        <span>valor de mi variable: {miVaribale}</span>
        <button onClick={() => {
          setMiVariable(miVaribale += 1);
        }}> Aumentar</button>

      </>
    );
  }


  return (
    <>
      {/* <h1>SPREADS</h1> */}
      {/* <Componente prop1={props.prop1} prop2={props.prop2} />
      <Componente {...props} /> */}

      <button onClick={() => {

        setAnimales([...animales,
        {
          id: Math.random(),
          nombre: "Pelusa",
          tipo: "conejo",
          color: "blanco",
          datos: ["muy blandito", "dormilón"]
        }
        ])

        console.log(animales)

      }}>Nuevo</button>

      {
        animales.map((animal, i) => {
          return (
            <Animal {...animal} key={animal.id} />
          )
        })
      }
    </>
  )
}

export default App
