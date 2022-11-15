import { configureStore } from '@reduxjs/toolkit'
import { pageChangeSlice } from './slices/pageChangeSlice'
const store = configureStore({
  reducer: {
    page: pageChangeSlice.reducer
  }
})

export default store