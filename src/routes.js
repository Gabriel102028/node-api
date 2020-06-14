const express = require('express');
const routes = express.Router();
const ProductContoller = require('./controllers/ProductController')
//criando as rotas do app
routes.get('/products', ProductContoller.index);

module.exports = routes;