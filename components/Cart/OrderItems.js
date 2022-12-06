import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { COLOR } from '../../assets/font/color'
export default function OrderItems(props) {
  const { orderItem } = props
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: orderItem.image ? orderItem.image : 'https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage_icon-1.png' }}
        />
        <Text style={[styles.label, styles.price]}>${orderItem.price}</Text>
        <Text style={styles.label}>{orderItem.quantity}</Text>

      </View>
      <View style={{ width: '100%', alignItems: 'center', marginBottom: 10 }}>
        <View style={{ borderTopWidth: 0.5, borderColor: '#ccc', width: '80%', opacity: 0.5 }}></View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 20
  },
  label: {
    fontSize: 15,
    color: 'white',
    paddingHorizontal: 20
  },
  price: {
    padding: 5,
    backgroundColor: COLOR.secondaryColor,
    borderRadius: 10,
  }
})