import { createSlice } from '@reduxjs/toolkit'

export const pageChangeSlice = createSlice({
  name: 'page',
  initialState: {
    pageCurrent: 'Home'
  },
  reducers: {
    changePage: (state, action) => {
      state.pageCurrent = action.payload
    }
  }
})