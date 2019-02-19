const express = require("express"); //Importamos o express para criar nosso server
const app = express();
app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.get("/login", (req, res) => {
  return res.send("Login");
});
app.listen(3000);
