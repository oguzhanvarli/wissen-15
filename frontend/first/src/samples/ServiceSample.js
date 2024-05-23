import React, { useState } from 'react'
import axios from "axios"

function ServiceSample() {

  const [productData, setProductData] = useState([])

  const handleProducts = async() => {
    //FETCH İLE DATA ÇEKME İŞLEMİ

    // try {
    //   let response = await fetch("http://localhost:9000/product/products")
    //   let data = await response.json()
    //   setProductData(data.data)
    //   console.log(data)
    // } catch (error) {
    //   console.log('Get All Products Error', error)
    // }

    //AXIOS İLE DATA ÇEKME İŞLEMİ
    try {
      let response = await axios.get("http://localhost:9000/product/products")
      console.log(response)
      setProductData(response.data.data)
    } catch (error) {
      console.log('Get All Products Error', error)
    }

  }


  return (
    <div>
      <button onClick={handleProducts}>Get Products</button>
      {
        productData.map((product) => {
          return <h1 key={product._id}>{product.productName}</h1>
        })
      }
    </div>
  )
}

export default ServiceSample