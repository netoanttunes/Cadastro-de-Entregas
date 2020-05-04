const { Router } = require('express');
const EntregasController = require ('./Controllers/EntregasController')

const routes = Router();

routes.get('/entregas', EntregasController.index); 

routes.post('/entregas', EntregasController.store);



module.exports = routes;