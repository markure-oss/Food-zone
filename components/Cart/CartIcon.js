import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { cartItemsSelector } from '../../redux/selector'
export default function CartIcon() {
  const quantityItemsInCart = useSelector(cartItemsSelector)
  return (
    quantityItemsInCart.length ? (
      <View style={styles.container} >
        <Text style={{ color: 'white' }}>{quantityItemsInCart.length}</Text>
      </View >
    ) : true
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    top: -5,
    right: -10,
  }
})