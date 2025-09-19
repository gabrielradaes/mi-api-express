const express = require('express');
const app = express();

app.use(express.json());

app.get('/usuarios', (req, res) => {
  res.json([
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Ana" }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
