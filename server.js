const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const url = 'mongodb+srv://usuario_admin:admin@clusterapi-5rwjx.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('erro', (err)=> {   
    console.log('Servidor com erro no banco de dados: ' + err);
})

mongoose.connection.on('disconnected',() => {
    console.log('Aplicação desconectada com o servidor.');
})

mongoose.connection.on('connected', () => {
    console.log('AplicaÇão conectada com sucesso!');

})

app.listen(6001);
console.log('Porta aberta com sucesso.');