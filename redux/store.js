import { configureStore } from '@reduxjs/toolkit'
import { pageChangeSlice } from './slices/pageChangeSlice'
import { cartSlice } from './slices/cartSlice'
const store = configureStore({
  reducer: {
    page: pageChangeSlice.reducer,
    cart: cartSlice.reducer,
  }
})

export default store