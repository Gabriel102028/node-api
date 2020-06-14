const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando app
const app = express();


//iniciando o database
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
requireDir('./src/models');


//routes
app.use('/api', require('./src/routes'));

// criando a porta do app
app.listen(3001)