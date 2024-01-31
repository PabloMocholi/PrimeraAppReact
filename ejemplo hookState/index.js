
console.clear();
console.log("Ejercicio 07");

function estadoCarrera(valorIni) {
    let estado = valorIni;
    // hook useState
    const setEstado = (nuevoValor) => {
        estado = nuevoValor;
        return;
    }

    const obtenerEstado =  () => {
        return estado;
    }
    return ([obtenerEstado, setEstado]);
}

//usar el hoook de useState
const [obtenerPiloto, setPiloto] = estadoCarrera("Juan");
console.log(obtenerPiloto())
setPiloto("Pedro");
console.log(obtenerPiloto())