const { Router } = require('express');
const EntrecasController = require ('./Controllers/EntregasController')

const routes = Router();

routes.get('/entregas', EntrecasController.index); 

routes.post('/entregas', EntrecasController.store);



module.exports = routes;