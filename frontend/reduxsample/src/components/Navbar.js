import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {

  //Değer okuman için useSelector kullanılır
  const counter = useSelector((state) => state.counter )

  return (
    <div>
      <h1>{counter.sayi}</h1>
    </div>
  )
}

export default Navbar