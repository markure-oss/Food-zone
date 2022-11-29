import { createSlice } from '@reduxjs/toolkit'

export const changeNav = createSlice({
  name: 'navigation',
  initialState: {
    pageCurrent: true
  },
  reducers: {
    changePage: (state, action) => {
      state.pageCurrent = !state.pageCurrent
      // console.log(state.pageCurrent)
    }
  }
})