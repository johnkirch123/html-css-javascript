// 1. require express constant
const express = require("express");
// 2. require mongoose constant
const mongoose = require("mongoose");
// 5. require body parser constant
const bodyParser = require("body-parser");
// 8. require passport constant
const passport = require("passport");

// 3. create route/api constants for .js api files
const users = require("./routes/api/users");
const products = require("./routes/api/products");
const instagramImages = require("./routes/api/instagram");

// 1. initialize app
const app = express();

/**
 * Beginning of server
 */

// 5. Body Parser middleware and allow usage of req.body...
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 2. create DB config constant
const db = require("./config/keys").mongoURI;
// 2. Connect to mongoDB through mongoose
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// 8. Passport Middleware
app.use(passport.initialize());

// 8. Passport Config
require("./config/passport")(passport);

// 3. use imported routes - users and products
app.use("/api/users", users);
app.use("/api/products", products);
app.use("/api/instagram", instagramImages);

// 1. Test route
app.get("/", (req, res) => res.send("Test"));

// 1. Create Port constant and then run server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));
