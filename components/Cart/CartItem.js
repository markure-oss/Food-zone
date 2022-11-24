import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { COLOR } from '../../assets/font/color'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { cartSlice } from '../../redux/slices/cartSlice'
import { quantitySelector, selectCartItemsWithID } from '../../redux/selector'

export default function CartItem(props) {
  const { item } = props
  const quantity = useSelector(state =>
    selectCartItemsWithID(state, item._id.$oid))
  const dispatch = useDispatch()

  // handle Click
  const handleClickDecrease = (id) => {
    dispatch(cartSlice.actions.decrementQuantity(id))
  }
  const handleClickIncrease = (id) => {
    dispatch(cartSlice.actions.incrementQuantity(id))
  }
  const handleClickRemove = (id) => {
    dispatch(cartSlice.actions.removeItem(id))
  }
  return (
    <>
      <View style={styles.cartItem}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: item.image ? item.image : 'https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage_icon-1.png' }}
          resizeMode="cover"
        />
        <View style={styles.detailOrderItem}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>{item.brand}</Text>
              <Text style={{ fontSize: 15, color: 'white', opacity: 0.5 }}>{item.description}</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleClickRemove(item._id.$oid)}
            >
              <Ionicons name="close" size={15} color="#ccc" />
            </TouchableOpacity>
          </View>
          <View style={styles.optionBuy}>
            <Text style={{ fontSize: 15, color: COLOR.secondaryColor, fontWeight: 'bold', width: 50, marginRight: 50 }}>${item.price}</Text>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLOR.mainColor,
              justifyContent: 'space-between',
              borderRadius: 20,
            }}>
              <TouchableOpacity
                style={{ padding: 5, paddingHorizontal: 10 }}
                onPress={() => handleClickDecrease(item._id.$oid)}
              >
                <Ionicons name="remove" size={25} color="white" />
              </TouchableOpacity>
              <Text style={{ color: 'white', padding: 5 }}>{quantity}</Text>
              <TouchableOpacity
                style={{ padding: 5, paddingHorizontal: 10 }}
                onPress={() => handleClickIncrease(item._id.$oid)}
              >
                <Ionicons name="add" size={25} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.line}></View>
    </>
  )
}

const styles = StyleSheet.create({
  cartItem: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
  },

  detailOrderItem: {
    marginLeft: 30,
    // paddingHorizontal: 20,
  },
  optionBuy: {
    marginTop: 20,
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 1,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ccc',
    opacity: 0.1
  },
})