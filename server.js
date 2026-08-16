import express from "express";

const app = express();

app.get("/api/mensagem", (req, res) => {
  res.json({
    mensagem: "Olá! Essa mensagem veio do Node.js no Cloudflare."
  });
});

export default app;