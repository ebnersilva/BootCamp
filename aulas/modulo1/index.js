const express = require("express"); //Importamos o express para criar nosso server
const app = express();

const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );

  req.appName = "GoNode";

  return next();
};

app.use(logMiddleware);

app.get("/", (req, res) => {
  return res.send(`Bem vindo ${req.appName}, ${req.query.name}`);
});

app.get("/nome/:name", (req, res) => {
  return res.send(`Welcome, ${req.params.name}`);
});
app.listen(3000);
