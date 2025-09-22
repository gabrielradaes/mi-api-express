const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/usuarios', (req, res) => {
  res.json([
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Ana" }
  ]);
});

module.exports.handler = serverless(app);
