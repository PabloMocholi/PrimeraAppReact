// easyFetch({
//     url:"mi/url",
//     method: "PUT",
//     body: FormData,
//     timeout: 3000,
//     callback: (data)=>{console.log("MIS DATOS", data)}
// })

/**
 * 
 * Realiza una petición Fetch 
 * - con gestión de errores básica 
 * - incluye señal de abort 
 * 
 * @param {Object}          fetchOptions                    - Opciones y configuración de la solicitud fetch
 *  
 * @param {string}          fetchOptions.url                - url a la que se realiza la petición 
 * @param {string}          [fetchOptions.method="GET"]     - indica el método HTTP de nuestra solicitud : GET, POST, PUT...
 * @param {Object|null}     fetchOptions.body               - el cuerpo de la petición que convertimos a JSON
 * @param {number}          [fetchOptions.timeout=5000]     - tiempo de espera máximo en ms antes de abortar la petición
 * @param {function|null}   fetchOptions.callback           - función que se ejecuta al recibir los datos
 * 
 * @returns {Promise|void}                                  - Devuelve una promesa que resuelve los datos de la respuesta si no se proporciona una función de callback
 */

export const easyFetch = async ({
    url, method = "GET", body = null, timeout = 5000, callback = null
}) => {
    const controller = new AbortController();
    const abortTimeout = setTimeout(() => controller.abort(), timeout)

    const fetchOptions = {
        method,
        headers: {
            'Content-Type': "application/json",
        },
        signal: controller.signal
    }

    if (body)
        fetchOptions.body = JSON.stringify(body);

    try {
        const response = await fetch(url, fetchOptions);
        clearTimeout(abortTimeout);

        if (!response.ok)
            throw new Error(response.statusTexts);

        const data = await response.json()

        if (callback)
            callback(data);
        else
            return data;

    } catch (error) {
        console.log(error)
    }


}