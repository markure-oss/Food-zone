import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function SingleProduct(props) {
  const [item, setItem] = useState(props.route.params.item)
  const [availability, setAvailability] = useState('')
  return (
    <View style={styles.container}>
      <ScrollView style={{ marginBottom: 80, padding: 5 }}>
        <Image
          source={{
            uri: item.image ? item.image : 'https://media.istockphoto.com/id/173240148/photo/one-green-pea-on-plate-table-setting-with-clipping-path.jpg?b=1&s=170667a&w=0&k=20&c=lnUXrKFxY4V6GdYmUm8XcbJJ66vI87WjB79CVKuXjvE='
          }}
          resizeMode="contain"
          style={styles.image}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative'
  },
  imageContainer: {
    backgroundColor: 'white',
    padding: 0,
    margin: 0
  },
  image: {
    width: '100%',
    height: 250
  }
})