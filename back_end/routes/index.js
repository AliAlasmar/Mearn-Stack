var express = require('express');
var router = express.Router();
var products = require('../data.json')
var Products = require('../models/ProductModel')
var Users = require('../models/UserModel')

var data = require('../user.json')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api1/product', function (req, res, next) {
  const productss= Products.find({}).then(result =>{
    console.log(result)
    res.json(result)
    
  })
  //res.json(products)
});

router.get('/api1/product/:slug', function (req, res, next) {
  
  const product = products.find(product => product.slug == req.params.slug)
  
  res.json(product);
});

router.get('/products',function(req ,res ,next){
  const products= Products.find({}).then(result =>{
    console.log(result)
    res.send(result)
    
  })
  //res.json(products)
})

router.get('/users',function(req ,res ,next){
  const products= Users.find({}).then(result =>{
    console.log(result)
    res.send(result)
    
  })
  //res.json(products)
})

router.get('/insert',async function(req, res, next){
  // const ProductCreate = await Products.insertMany(products)
  // console.log(ProductCreate)
  // res.send(ProductCreate)
  const users = await Users.insertMany(data)
  console.log(data)
  
  //res.send(users)
})
router.get('/api1/product_cart/:id', function (req, res, next) {
  
  const product = products.find(product => product._id == req.params.id)
  
  res.json(product);
});

module.exports = router;
