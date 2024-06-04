const {Schema, model} = require("mongoose")

const productSchema = new Schema({
  productName : {type: String, required: [true, 'productName is required']},
  price : {type: Number, required: [true, 'Price is required!']},
  quantity : {type: Number, required: [true, 'Quantity is required!']},
  image : {type: String, required: [true, 'Image is required!']},
  cartQuantity: {type: Number, default: 1},
})

const Product = model('Product', productSchema)
module.exports = Product

