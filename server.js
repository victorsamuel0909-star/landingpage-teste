import { httpServerHandler } from "cloudflare:node";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("API funcionando no Cloudflare!");
});

app.get("/api/mensagem", (req, res) => {
  res.json({
    mensagem: "Olá! Essa mensagem veio do Node.js no Cloudflare."
  });
});

app.listen(3000);

export default httpServerHandler({ port: 3000 });