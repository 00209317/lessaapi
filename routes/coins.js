var express = require('express');
var router = express.Router();
var coinsController = require('../controllers/coinsController')

/* GET home page. */


//router.get('/', coinsController.getAll);


router.get('/name/:name',coinsController.getByName);




module.exports = router;
