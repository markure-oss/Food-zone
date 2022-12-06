import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { orderPendingSelector } from '../../redux/selector'
export default function OrderIcon() {
  const numberOrderPending = useSelector(orderPendingSelector)
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>{numberOrderPending}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    paddingHorizontal: 5,
    borderRadius: 10,
    position: 'absolute',
  }
})