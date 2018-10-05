// 3. require express const & router const
const express = require("express");
const router = express.Router();

// 3. create a test route returning json for react to use
// @route   GET api/products/test
// @desc    Tests products route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Products Works" }));

// 3. export router as a module
module.exports = router;
