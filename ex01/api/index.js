
import express from "express";


const app = express();

app.get("/", (req, res) => {
  res.send("Bem-vindo ao Express de Marcelinha  <3 ");
});

app.listen(3000, () => {
  console.log("Roda roda Jequiti");
});