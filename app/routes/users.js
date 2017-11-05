var express    = require('express');        // call express
var router = express.Router();              // get an instance of the express Router

var userController = require('../controllers/userController');

//Registar um novo utilizador
router.post('/Registar', userController.registarUser);

//Retorna todos os users na base de dados
router.get('/', userController.listarUsers);

//Autenticar um utilizador
router.post('/Autenticar', userController.autenticarUser);

module.exports = router;