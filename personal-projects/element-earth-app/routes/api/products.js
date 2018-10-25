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
      res.status(200).json(products);
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

/* TODO ALLOW ONLY ADMIN TO THIS ROUTE */
// @route   Post api/products/
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

module.exports = router;
