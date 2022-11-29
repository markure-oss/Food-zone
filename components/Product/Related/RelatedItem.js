import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { memo, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
// icon
import { FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { pageSelector } from '../../../redux/selector'
import { changeNav } from '../../../redux/slices/changeNav'
// redux
function RelatedItem({ itemRelate }) {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const _itemPage = useSelector(pageSelector)
  const [item, setItem] = useState(itemRelate.item)
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        _itemPage ? navigation.navigate("Single Product", { item: item })
          : navigation.navigate("Product Detail", { item: item })
        dispatch(changeNav.actions.changePage())
      }}
    >
      <Image
        source={{ uri: itemRelate.item.image ? itemRelate.item.image : 'https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage_icon-1.png' }}
        style={styles.image}
      />
      <Text style={{ color: 'white', marginTop: 10, fontWeight: 'bold' }}>{itemRelate.item.name}</Text>
      <View style={styles.rating}>
        <Text style={{ color: '#ccc', }}>{itemRelate.item.rating.toFixed(1)}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
          <FontAwesome name="star" size={14} color="#FDCC0D" />
        </View>
      </View>
    </TouchableOpacity >
  )
}
export default RelatedItem
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 10,
  },
  image: {
    backgroundColor: '#ccc',
    width: 200,
    height: 130,
    borderRadius: 10,

  },
  rating: {
    flexDirection: 'row',
  },
})