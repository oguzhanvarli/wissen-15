import React from 'react'
import { useDispatch } from 'react-redux'
import { sayiyiArttir, sayiyiAzalt } from '../store/slices/counterSlice'

function Main() {

  //Değer değiştirmek için useDispatch kullanılır
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(sayiyiArttir())
  }

  const decrement = () => {
    dispatch(sayiyiAzalt())
  }

  return (
    <div>
      <button onClick={decrement}>Sayıyı Azalt</button>
      <button onClick={increment}>Sayıyı Arttır</button>
    </div>
  )
}

export default Main