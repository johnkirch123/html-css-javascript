const express = require("express");
const router = express.Router();

// @route   GET api/instagram/test
// @desc    Tests products route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Instagram Works" }));

// @route   GET api/instagram/
// @desc    get all instagram
// @access  Public
router.get("/", (req, res) => {
  // Make api call to instagram
  console.log("Instagram API call being made.");
});

module.exports = router;
