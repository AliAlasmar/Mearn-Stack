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

router.get('/api1/product/:slug', function (req, res, next) {
  
  const product = products.find(product => product.slug == req.params.slug)
  
  res.json(product);
});

router.get('/api1/product_cart/:id', function (req, res, next) {
  
  const product = products.find(product => product._id == req.params.id)
  
  res.json(product);
});

module.exports = router;
