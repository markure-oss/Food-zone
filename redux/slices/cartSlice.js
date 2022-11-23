import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCard: (state, action) => {
      const itemInCart = state.cartItems.find((item) => item._id.$oid === action.payload._id.$oid);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item._id.$oid === action.payload);
      item.quantity++;

    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item._id.$oid === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cartItems.filter((item) => item._id.$oid !== action.payload);
      state.cartItems = removeItem;
    },
    removeAll: (state, action) => {
      state.cartItems = []
    },
  }
})