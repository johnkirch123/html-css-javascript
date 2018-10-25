const express = require("express");
const Product = require("../../models/Product");
const router = express.Router();

// @route   GET api/products/test
// @desc    Tests products route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Products Works" }));

// @route   GET api/products/
// @desc    get all products
// @access  Public
router.get("/", (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      console.log(err);
    } else {
      res.json(products);
    }
  });
});

// @route   GET api/products/:id
// @desc    get product by id
// @access  Public
router.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err =>
      res.status(404).json({ noProductFound: "This product doesn't exist" })
    );
});

// @route   PUT api/products/:id/edit
// @desc    edit product
// @access  Private
router.put("/:id", (req, res) => {
  const errors = {};
  errors.productUpdateError = "This product was not properly updated.";
  const editedProduct = ({
    name,
    description,
    price,
    type,
    set,
    modelNumber,
    available,
    count
  } = req.body);
  Product.findById(req.params.id)
    .then(product => {
      Product.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: editedProduct },
        { new: true }
      ).then(product => res.json(product));
    })
    .catch(err => res.status(404).json(errors));
});

/* TODO ALLOW ONLY ADMIN TO THIS ROUTE */
// @route   POST api/products/
// @desc    Create a new product
// @access  Private
router.post("/", (req, res) => {
  const newProduct = new Product(
    ({
      name,
      description,
      price,
      type,
      set,
      modelNumber,
      available,
      count
    } = req.body)
  );
  newProduct.save().then(product => res.json(product));
});

/* TODO ALLOW ONLY ADMIN TO THIS ROUTE */
// @route   DELETE api/products/:id
// @desc    Delete a product
// @access  Private
router.delete("/:id", (req, res) => {
  Product.findOneAndRemove({ _id: req.params.id })
    .then((err, product) => {
      if (err) res.send(err);
      else res.json(product);
    })
    .catch(err => res.status(404).json({ msg: "Something went wrong" }));
});

module.exports = router;
