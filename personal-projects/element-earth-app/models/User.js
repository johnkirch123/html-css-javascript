/* @desc    the User model is how data will be formatted going to and 
            coming from the server. Mongoose will use a Schema to make
            sure data adheres to this format.
*/
// 4. require const mongoose
const mongoose = require("mongoose");
// 4. require const Schema
const Schema = mongoose.Schema;

// 4. create Schema - what will the collection have?
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// 4. export mongoose model with the name users and using the
// user schema as a variable named User
module.exports = User = mongoose.model("users", UserSchema);
