const express = require("express")
const mongoose = require("mongoose")

const Product = require("./models/ProductModel")
const ProductRouter = require("./router/ProductRouter")


mongoose.connect("mongodb+srv://oguzhanvarli:oguzhanvarli@cluster0.4y4uz6y.mongodb.net/wissen-15?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err)) 

const app = express()

app.use(express.json())

//ROUTES
app.use("/product", ProductRouter)

app.get("/", (req,res) => {
  res.send("Merhaba ben senin ilk get Api adresinim")
})

 

app.listen(9000,()=>{
  console.log('Merhaba Ben Çalıştım')
})
