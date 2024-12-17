const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/calcular', (req, res) => {
    const { custoFixo, margemLucro, assinantes } = req.body;

    if (!custoFixo || !margemLucro || !assinantes) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const precoIdeal = (custoFixo / assinantes) * (1 + margemLucro / 100);
    
    
    res.json({ precoIdeal: precoIdeal.toFixed(2)});
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
