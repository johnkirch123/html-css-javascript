// 3. require express const & router const
const express = require("express");
const router = express.Router();
// 5. require user model and gravatar and bcryptjs
const User = require("../../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
// 7. require JWT and keys for the secret
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// 3. create a test route returning json for react to use
// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// 5. create a registration route returning json for react to use
// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res) => {
  // find One email, to make sure user is not already registered.
  User.findOne({ email: req.body.email })
    .then(user => {
      // after user returned, check to see if there was a user (truthy)
      // and return error, else create the user and save to db.
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        // Create a gravatar constant
        const avatar = gravatar.url(req.body.email, {
          s: "200", // size
          r: "pg", // rating
          d: "mm" // default
        });
        // Create a newUser constant
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        });
        // encrypt user password by generating a salt which returns a hash,
        // pass the hash into the callback and throw err if there is one,
        // if not, set newUser password to the hashed password then save the
        // new user and return json with the user data since it is a promise.
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch(err => console.log(err));
});

// 6. create a login route and validate username and password and return JWT
// @route   POST api/users/login
// @desc    Login user
// @access  Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  //Find user by email with user model
  User.findOne({ email })
    .then(user => {
      // If user does not exist return 404 and set error
      if (!user) {
        return res.status(404).json({ email: "User not found" });
      } else {
        // Check password using bcrypt to check the entered password to the
        // hashed password
        bcrypt.compare(password, user.password).then(isMatch => {
          // If user passes return JWT
          if (isMatch) {
            // 7. Creating the JWT payload
            const payload = {
              id: user.id,
              name: user.name,
              avatar: user.avatar
            };
            // 7. Sign the Token and return the Bearer token via JSON
            jwt.sign(
              payload,
              keys.secret,
              { expiresIn: 86400 },
              (err, token) => {
                res.json({
                  success: true,
                  token: `Bearer ${token}`
                });
              }
            );
          } else {
            // return 'Bad Request Error' 400 code and a password object for error handling
            return res.status(400).json({ password: "Incorrect password" });
          }
        });
      }
    })
    .catch(err => console.log(err));
});

// 3. export router as a module
module.exports = router;
