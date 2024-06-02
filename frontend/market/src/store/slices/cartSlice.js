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
      state.cartNumber += 1
      state.products.push(action.payload)
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