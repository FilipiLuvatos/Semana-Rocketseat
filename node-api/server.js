const express = require('express');//Requerindo o pacote express
const mongose = require('mongoose');
const requiereDir = require('require-dir');

const app = express();



mongose.connect('mongodb://http://localhost:3000/Filipi',
    { useNewUrlParser: true });

require('./src/models/Project');


const Product = mongose.model('Product');


app.use('/api', require('./src/Routes'));
// '/' Indica a rota raiz
//req = requisição ao servidor
//res = resposta da requisição 


app.listen(3000);//Ouvir na porta 4000