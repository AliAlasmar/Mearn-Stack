var express = require('express');
var router = express.Router();
var products = require('../data.json')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api1/product', function (req, res, next) {
  res.json(products);
});

module.exports = router;
