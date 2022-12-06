import { configureStore } from '@reduxjs/toolkit'
import { pageChangeSlice } from './slices/pageChangeSlice'
import { cartSlice } from './slices/cartSlice'
import { changeNav } from './slices/changeNav'
import { orderPendingSlice } from './slices/orderPending'
const store = configureStore({
  reducer: {
    page: pageChangeSlice.reducer,
    cart: cartSlice.reducer,
    navigation: changeNav.reducer,
    orderPending: orderPendingSlice.reducer,
  }
})

export default store