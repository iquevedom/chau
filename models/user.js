var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
 // `user` is required and of type String
 email: {
    type: String,
    required: true
  },
  // `password` is required and of type String
  password: {
    type: String,
    required: true
  },
    // `Article` is an object that stores an Article id
  // The ref property links the ObjectId to the Article model
  // This allows us to populate the User with an associated Article
  Article: {
    type: Schema.Types.ObjectId,
    ref: "Article"
  }
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the Note model
module.exports = User;