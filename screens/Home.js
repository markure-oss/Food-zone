import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <ScrollView style={{ backgroundColor: 'blue' }}>
      <Text>Hello</Text>
      <View style={{ backgroundColor: 'black', height: 1000, width: '100%' }}>
      </View>
      <View style={{ backgroundColor: 'white', height: 1000, width: '100%' }}></View>
    </ScrollView>
  )
}