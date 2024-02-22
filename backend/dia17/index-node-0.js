console.clear()
const http = require("http")

const server = http.createServer((req,res)=>{
    res.write("<html>")
    res.write("<head><title>Mi servidor Node</title></head>")
    res.write("<body><h1>Hola desde mi server</h1></body>")
    res.write("</html>")
    res.end()
})

server.listen(8080,()=>{
    console.log("server corriendo")
})