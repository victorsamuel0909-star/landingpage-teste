import { httpServerHandler } from "cloudflare:node";
import express from "express";

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

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