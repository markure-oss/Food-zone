import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Error(props) {

  return (
    <View style={styles.container}>
      <Text style={{ color: 'red' }}>{props.message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  }
})