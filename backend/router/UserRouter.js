const express = require("express")
const User = require("../models/UserModel")
const UserRouter = express.Router()
const jwt = require("jsonwebtoken")
const tokenControl = require("../middleware/auth")

UserRouter.post("/register", async(req,res) => {
  try {
    let savedUser = await User.create(req.body)
    res.status(200).send({status: true, message: `${savedUser.username} Created!`})
  } catch (error) {
    res.status(404).send({status: false, message: error.message})
  }
})

UserRouter.post("/login", async(req, res) => {
  try {
    const {username, password} = req.body
    if(!username || !password || username === "" || password === ""){
      return res.status(404).send({status: false, message: 'Username and Password Required!'})
    }
    let enteredUser = await User.findOne({username})
    if(!enteredUser){
      return res.status(404).send({status: false, message: 'Username not found!'})
    }
    if(enteredUser.password !== password){
      return res.status(404).send({status: false, message: 'Incorrect Password!'})
    }
    let access_token = jwt.sign({id:enteredUser._id, username:enteredUser.username, email: enteredUser.email},process.env.KEYFORJWT,{expiresIn: "1h"})
    res.status(200).send({status: true, message: `Welcome ${enteredUser.username}`, user:enteredUser, access_token: access_token})

  } catch (error) {
    res.status(404).send({status: false, message: error.message})
  }
})

UserRouter.post("/resetPassword", async(req, res) => {
  try {
    let {username, password, newPassword} = req.body
    let userFromDb = await User.findOne({username})
    if(!userFromDb || userFromDb.password !== password){
      return res.status(404).send({status: false, message: 'Invalid Username or Password!'})
    }
    await User.findOneAndUpdate({username},{password: newPassword})
    res.status(200).send({status: true, message: 'Password changed!'})
  } catch (error) {
    res.status(404).send({status: false, message: error.message})
  }
})

UserRouter.get("/getAll",tokenControl,async(req,res) => {
  try {
    let users = await User.find({})
    return res.status(200).send({status:true, message: 'User List', users: users})
  } catch (error) {
    res.status(404).send({status: false, message: error.message})
  }
})

module.exports = UserRouter