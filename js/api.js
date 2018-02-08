const express = require('express');
const mongodb = require('mongodb');
const expressMongoDB = require('express-mongo-db');
const bodyParser = require('body-parser');
const aulasController = require('./aulasController.js');
const app = express();

app.listen(3000,	()	=>	{	
    console.log(`Servidor	rodando.	Acesse	em	http://localhost:3000`);
});

app.use(bodyParser.json());
app.use(expressMongoDB('mongodb://localhost/meu-bd'));


app.get('/api/assistir', aulasController.getAulas);
app.post('/api/enviar',	aulasController.postAulas);