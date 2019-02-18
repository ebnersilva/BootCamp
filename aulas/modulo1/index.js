const http = require("http"); //Importamos o http para criação do nosso server
http
  .createServer((req, res) => {
    console.log(req);
    return res.end("Hello World");
  })
  .listen(3000);
