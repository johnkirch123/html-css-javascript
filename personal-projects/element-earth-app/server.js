// 1. express
const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

// 1. initialize app
const app = express();
// 1. Test route
app.get("/", (req, res) => res.send("Hello"));

// 1. Create Port var then Run Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));
