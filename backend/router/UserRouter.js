const express = require("express")
const User = require("../models/UserModel")
const UserRouter = express.Router()
const jwt = require("jsonwebtoken")

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
    let access_token = jwt.sign({id:enteredUser._id, username:enteredUser.username},process.env.KEYFORJWT,{expiresIn: "1h"})
    res.status(200).send({status: true, message: `Welcome ${enteredUser.username}`, user:enteredUser, access_token: access_token})

  } catch (error) {
    res.status(404).send({status: false, message: error.message})
  }
})

module.exports = UserRouter