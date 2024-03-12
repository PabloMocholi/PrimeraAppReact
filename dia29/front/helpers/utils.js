// easyFetch({
//     url:"mi/url",
//     method: "PUT",
//     body: FormData,
//     timeout: 3000,
//     callback: (data)=>{console.log("MIS DATOS", data)}
// })

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