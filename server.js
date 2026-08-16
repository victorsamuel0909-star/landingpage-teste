const express = require("express");

const app = express();

app.use(express.static(__dirname));
app.get("/api/mensagem", (req, res) => {
  res.json({
    mensagem: "Olá! Essa mensagem veio do Node.js."
  });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});