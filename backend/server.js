const express = require("express")
const mongoose = require("mongoose")

const Product = require("./models/ProductModel")


mongoose.connect("mongodb+srv://oguzhanvarli:oguzhanvarli@cluster0.4y4uz6y.mongodb.net/wissen-15?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err)) 

const app = express()

app.use(express.json())

app.get("/", (req,res) => {
  res.send("Merhaba ben senin ilk get Api adresinim")
})

app.post("/addProduct", async(req,res) => {
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

app.get("/products", async(req, res) => { 
  try {
    const allProduct = await Product.find({})
    res.status(200).send({status: true, message: "All Product", data: allProduct})
  } catch (error) {
    res.status(404).send({status: false, message: error.message})
  }
 })

 app.get(`/products/:id`, async(req,res) => {
  try {
    //let id = req.params
    let {id} = req.params
    const product = await Product.findById(id)
    res.status(200).send({status: 200, message: 'Product Get', data: product})
  } catch (error) {
    res.status(404).send({status: false, message: error.message})
  }
 })

app.listen(9000,()=>{
  console.log('Merhaba Ben Çalıştım')
})
