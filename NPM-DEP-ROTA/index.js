const express = require ('express');
const app = express();

app.get ('/', function (req, res) {
    res.send('Ola 3º Ano')
});

app.get ('/resultado', function (req, res) {
    res.send('1 ponto para Todos')
});

app.listen (8080, function (){
    console.log('servidor iniciado na porta 8080: http://localhost:8080')
})