const express = require('express');
const router = express.Router();
const Products = require('../../store/Products');
var app     = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res) {
    var   produto = []; 

    produto.id = req.body.id;
    produto.name = req.body.name;
    produto.description = req.body.description;
    produto.price = req.body.price;

    console.log('produto: ' +produto);

    Products.update(produto) 
    .then(function(produto) {      
    res.send('Produto Editado');
    })

});

module.exports = router;
