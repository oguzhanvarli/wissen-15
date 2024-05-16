//username, email, password
const {Schema, model} = require("mongoose")
const validator = require("validator")

const UserSchema = new Schema({
  username : {
    type: String,
    required : [true, 'Username is Required!'],
    min : [3, 'Username must be 3 characters!'],
    unique : true
  },
  password : {
    type: String,
    required : [true, 'Password is Required'],
  },
  email : {
    type: String,
    required : [true, 'Email is Required!'],
    unique : true,
    validate : {
      validator: validator.isEmail,
      message : 'Email is Invalid!'
    }
  }
})

const User = model("User", UserSchema)
module.exports = User