const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('APLICAÇÃO RODANDO!');
});

app.listen(port, () => {
    console.log('servidor rodando na porta 5000');
});