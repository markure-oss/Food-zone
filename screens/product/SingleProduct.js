import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { COLOR } from '../../assets/font/color'
export default function SingleProduct(props) {
  const [item, setItem] = useState(props.route.params.item)
  const [availability, setAvailability] = useState('')
  return (
    <ScrollView>
      <View style={styles.header}>
        <ImageBackground
          source={{
            uri: item.image ? item.image : 'https://media.istockphoto.com/id/173240148/photo/one-green-pea-on-plate-table-setting-with-clipping-path.jpg?b=1&s=170667a&w=0&k=20&c=lnUXrKFxY4V6GdYmUm8XcbJJ66vI87WjB79CVKuXjvE='
          }}
          resizeMode="cover"
          style={styles.image}
        >
          <LinearGradient colors={['rgba(255, 255, 255, 0.1)', 'rgba(0, 0, 0, 0.8)']} style={{ flex: 1 }}>
          </LinearGradient>

        </ImageBackground>
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '30%',
  },
  image: {
    width: '100%',
    height: 300
  }
})