import { createSlice } from '@reduxjs/toolkit'

export const orderPendingSlice = createSlice({
  name: 'orderPending',
  initialState: {
    numberOrderPending: 0
  },
  reducers: {
    changeOrderPending: (state, action) => {
      state.numberOrderPending = action.payload
    }
  }
})