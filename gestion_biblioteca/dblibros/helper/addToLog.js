import connection from '../db/mysql.db.js'

export const addToLog =  async(registro, tipo, usuario, fecha) => {

    console.log("Add to Log")
   
    const consulta = 'INSERT INTO logger (registro, tipo, id_usuario) VALUES (?, ?, ?);'

    const [results, fields] = await connection.query(
        consulta,
        [registro, tipo, usuario]
    );

}