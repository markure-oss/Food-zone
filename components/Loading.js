import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { COLOR } from '../assets/font/color'
export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={40} color={COLOR.secondaryColor} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.mainColor
  }
})

