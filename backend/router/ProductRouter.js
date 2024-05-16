const express = require("express")
const Product = require("../models/ProductModel")
const ProductRouter = express.Router()

ProductRouter.get("/products", async(req,res) => {
  try {
    const allProduct = await Product.find({})
    res.status(200).send({status: true, message: "All Product", data: allProduct})
  } catch (error) {
    res.status(404).send({status: false, message: error.message})
  }
})
ProductRouter.post("/addProduct", async(req,res) => {
  try {
    let newProduct = req.body
    let savedData = await Product.create(newProduct)
    res.send(
      {
        status:true,
        data : savedData,
        message : "Product Created"
      }
    )
  } catch (error) {
    res.status(404).send({status: false, message: error.message})
    //console.log(error.message)
  }
})

 ProductRouter.get(`/products/:id`, async(req,res) => {
  try {
    //let id = req.params
    let {id} = req.params
    const product = await Product.findById(id)
    res.status(200).send({status: 200, message: 'Product Get', data: product})
  } catch (error) {
    res.status(404).send({status: false, message: error.message})
  }
 })

 ProductRouter.delete("/products", async(req,res) => {
  try {
    let {id} = req.body
    const deletedProduct = await Product.findByIdAndDelete(id)
    console.log(deletedProduct)
    if(!deletedProduct){ //Burası deletedProduct null gelirse girecek
      return res.status(404).send({status: false, message: 'Product not Deleted!'})
    }
    res.status(200).send({status: true, message: 'Product Deleted!'})
  } catch (error) {
    res.status(404).send({status: false, message: error.message})
  }
 })

 ProductRouter.put("/products", async(req,res) => {
  try {
    let data = req.body
    if(!data._id){
      return res.status(404).send({status: false, message: "Update Edilecek ID Gönderilmedi"})
    }
    await Product.findByIdAndUpdate(data._id, data)
    res.status(200).send({status: true, message: 'Product Updated!'})
  } catch (error) {
    res.status(404).send({status: false, message: error.message})
  }
 })


module.exports = ProductRouter