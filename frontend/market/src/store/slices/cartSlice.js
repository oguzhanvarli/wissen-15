import { createSlice } from "@reduxjs/toolkit";






const initialState = {
  cartNumber: 0,
  products : []
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers:{
    increment: (state,action) => {
      let isHas = false
      state.cartNumber += 1
      let newValue = state.products.map((product) => {
        if(product._id === action.payload._id){
          isHas = true
          return {...product, cartQuantity: product.cartQuantity + 1 }
        }
      })
      console.log(newValue)
      if(isHas){
        state.products.push(newValue[0])
      }else{
        state.products.push(action.payload)
      }
    },
    clearCart : (state) => {
      //state = initialState
      state.products = []
      state.cartNumber = 0
    },
    removeItem : (state,action) => {
      let newProduct = state.products.filter(product => product._id !== action.payload)
      state.cartNumber -= 1
      state.products = newProduct
    }
  }
})

export const {increment, clearCart, removeItem} = counterSlice.actions
export default counterSlice.reducer