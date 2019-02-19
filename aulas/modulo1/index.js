const express = require("express"); //Importamos o express para criar nosso server
const app = express();
app.get("/", (req, res) => {
  return res.send(`Bem vindo, ${req.query.name}`);
});

app.get("/nome/:name", (req, res) => {
  return res.send(`Welcome, ${req.params.name}`);
});
app.listen(3000);
