import React, { useEffect, useState } from 'react'
import axios from "axios"

function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      let response = await axios.get("http://localhost:9000/product/products")
      //console.log(response.data)
      setData(response.data.data)
    } catch (error) {
      console.log('Get All Products Error', error)
    }
  }

  return (
    <div>
      {/* {
        data && data.map((product, key) => (
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="p-8 rounded-t-lg w-full"
                style={{minHeight: "400px", maxHeight: "400px"}}
                src={product.image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.productName}
                </h5>
              </a>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>

        ))
      } */}
      <div style={{display: "flex"}}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
      </div>
      <div>
        <span style={{display: "block"}}>A</span>
        <span>B</span>
        <span>c</span>
      </div>

    </div>
  )
}

export default Home