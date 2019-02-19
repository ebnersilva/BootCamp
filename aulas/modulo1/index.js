const express = require("express"); //Importamos o express para criar nosso server
const nunjucks = require("nunjucks"); //Importamos o nunjucks para renderizar HTML com javascript
const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.set("view engine", "njk"); //Qual extensão dos nossos arquivos nunjucks

app.get("/", (req, res) => {
  return res.render("list", { name: "Jenifer" });
});

app.listen(3000);
