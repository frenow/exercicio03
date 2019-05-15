const express = require('express');
const router = express.Router();
const Products = require('../../store/Products');
const Comment = require('../../store/Comment');
var app     = express();

var bodyParser = require('body-parser');
var corpo;


app.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.get('/:id', function(req, res) {
      const id = req.params.id;
      var comentarios = [];

      Comment.find({ id:req.params.id }).then(function (comments) {
        comentarios = comments;

      Products.getId(id)
      .then(function(products) {
        res.render('detalhe_products', { products: products, comentarios });
      })
	  
      });


});

/* GET home page. */
router.post('/', function(req, res) {
  const id = req.body.id;

  Products.deleteId(id) 
    .then(function(products) {      
      res.send('Produto deletado');
    })
});

module.exports = router;
