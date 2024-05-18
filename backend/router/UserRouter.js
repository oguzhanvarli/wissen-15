const express = require("express")
const User = require("../models/UserModel")
const UserRouter = express.Router()

UserRouter.post("/register", async(req,res) => {
  try {
    let savedUser = await User.create(req.body)
    res.status(200).send({status: true, message: `${savedUser.username} Created!`})
  } catch (error) {
    res.status(404).send({status: false, message: error.message})
  }
})

module.exports = UserRouter