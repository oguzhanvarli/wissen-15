import { createSlice } from "@reduxjs/toolkit";







const initialState = {
  sayi : 0
}


export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    sayiyiArttir : (state) => {
      state.sayi += 1
    },
    sayiyiAzalt : (state) => {
      state.sayi -= 1
    }
  }
})

export const {sayiyiArttir, sayiyiAzalt} = counterSlice.actions
export default counterSlice.reducer


