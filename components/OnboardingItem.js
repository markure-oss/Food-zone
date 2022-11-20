import { View, Text, useWindowDimensions, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function OnboardingItem({ item }) {
  const { width } = useWindowDimensions()
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: 'contain' }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 30
  },
  title: {
    fontWeight: '800',
    fontSize: 22,
    marginBottom: 30,
    color: '#ffff',
    textAlign: 'center'
  },
  description: {
    fontWeight: '200',
    fontSize: '17',
    textAlign: 'center',
    paddingHorizontal: 64,
    color: '#ffff'
  }
})