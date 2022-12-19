
const Product = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        message: 'Hello World'
    });
}

//add new product
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

//find all products
module.exports.allProducts = (req, res) => {
    Product.find({})
        .then(products => {
            console.log(products);
            res.json(products)
        })
        .catch(err => res.json(err));
}

//find one product
module.exports.getProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

