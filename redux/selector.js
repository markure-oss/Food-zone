export const pageSelector = (state) => state.navigation.pageCurrent

export const selectCartItemsWithID = (state, id) => {
  const item = state.cart.cartItems.find(item => item._id.$oid === id)
  return item.quantity
}

export const cartItemsSelector = (state) => state.cart.cartItems

export const selectBasketTotal = (state) =>
  state.cart.cartItems.reduce((total, item) =>
    total += item.price * item.quantity, 0)
