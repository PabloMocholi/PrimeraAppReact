console.clear()
const http = require("http")

const server = http.createServer((req,res)=>{

    res.statusCode = 200;
    //le indico que voy a responder con HTML
    res.setHeader("Content-Type" , "text/html");

    let isRoute = false;

    console.log(req.url)

    res.write("<html>")

    if(req.url == "/"){
        isRoute = true;
       
        res.write("<head><title>Mi servidor Node</title></head>")
        res.write("<body><h1>Hola desde mi server</h1></body>")
       
    }

    if(req.url == "/perfil"){
        isRoute = true;
      
        res.write("<head><title>Mi servidor Node</title></head>")
        res.write("<body><h1>Hola desde mi pagina perfil</h1></body>")
        
    }

    if(!isRoute){
       
        res.write("<head><title>Mi servidor Node</title></head>")
        res.write("<body><h1>Error 404: Not found</h1></body>")
      
    }

    res.write("</html>")
    res.end()
 
})

server.listen(8080,()=>{
    console.log("server corriendo")
})