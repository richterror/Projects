const mongodb = require('mongoose');
// Stor bokstav på Product
const Product = require('./productSchema');

// Funktion som hämtar alla produkter
exports.getProducts = (req, res) => {
  Product.find({}, (err, data) => {
    if(err) {
      return res.status(500).json({
        statusCode: 500,
        status: false,
        message: err.message || 'Something went wrong when fetching the products'
      })
    }

    res.status(200).json(data);

  })
}


exports.getProduct = (req, res) => {

  Product.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request'
      })
    }

    if(result) {
      Product.findById(req.params.id)
        .then(product => res.status(200).json(product))
        .catch(err => res.status(500).json({
          statusCode: 500,
          status: false,
          message: err.message
        }))
    } else {
      res.status(404).json({
        statusCode: 404,
        status: false,
        message: err || 'Oops, this products does not exist'
      })
    }
  })
}

exports.createProduct = (req, res) => {

  Product.exists({ name: req.body.name }, (err, result) => {
    if(err) {
      return res.status(500).json(err);
    }

    if(result) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'Bad request, A product by that name already exists, please update product instead'
      })
    }


    const newProduct = new Product({

      name:   req.body.name,
      short:  req.body.short,
      desc:   req.body.desc,
      price:  req.body.price,
      image:  req.body.image

    })

    newProduct.save()
      .then(() => {
        res.status(201).json({
          statusCode: 201,
          status: true,
          message: 'Product created successfully'
        })
      })
      .catch(err => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to create product',
          err
        })
      })
  })
}

exports.updateProduct = (req, res) => {

  Product.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request'
      })
    }

    if(result) {

      Product.updateOne({ _id: req.params.id }, {
        ...req.body,
        modified: Date.now()
      })
      .then(() => {
        res.status(200).json({
          statusCode: 200,
          status: true,
          message: 'Product updated successfully'
        })
      })
      .catch((err) => {
        if(err.code === 11000) {
          return res.status(400).json({
            statusCode: 400,
            status: false,
            message: 'A product by that name already exixst',
            err
          })
        }

        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to update product',
          err
        })
      })

    } else {
      res.status(404).json({
        statusCode: 404,
        status: false,
        message: err || 'Oops, this product does not exist'
      })
    }
  })
}

exports.deleteProduct = (req, res) => {

  Product.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request'
      })
    }

    if(result) {

      Product.deleteOne({ _id: req.params.id })
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'Product deleted'
          })
        })
        .catch(err => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to delete product',
            err
          })
        })

    } else {
      res.status(404).json({
        statusCode: 404,
        status: false,
        message: err || 'Oops, this product does not exist'
      })
    }

  })

}