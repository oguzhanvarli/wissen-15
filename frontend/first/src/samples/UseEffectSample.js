import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseEffectSample() {

  const [data, setData] = useState([])

  useEffect(()=>{
    getProducts()
  },[])

  const getProducts = async() => {
    try {
      let response = await axios.get("http://localhost:9000/product/products")
      setData(response.data.data)
    } catch (error) {
      console.log('Get All Products Error', error)
    }
  }

  return (
    <div>
      {
        data.map((product, key) => (
          <h1 key={key}>{product.productName}</h1>
        ))
      }
    </div>
  )
}

export default UseEffectSample