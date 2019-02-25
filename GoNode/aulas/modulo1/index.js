const express = require("express"); //Importamos o express para criar nosso server
const nunjucks = require("nunjucks"); //Importamos o nunjucks para renderizar HTML com javascript
const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.use(express.urlencoded({ extended: false })); //Para o express saber lidar com informações que vem de form HTML
app.set("view engine", "njk"); //Qual extensão dos nossos arquivos nunjucks

const users = ["Diego Fernandes", "Robson Marques", "Cleiton Souza"];

app.get("/", (req, res) => {
  return res.render("list", { users });
});

app.get("/new", (req, res) => {
  return res.render("new");
});

app.post("/create", (req, res) => {
  users.push(req.body.user);
  return res.redirect("/");
});

app.listen(3000);
