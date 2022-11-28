import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ReviewItem(props) {
  const { item } = props
  return (
    <>
      <View style={styles.line}></View>
      <View style={styles.containReview}>
        <Image
          source={{
            uri: item.image ? item.image : "https://media.istockphoto.com/id/173240148/photo/one-green-pea-on-plate-table-setting-with-clipping-path.jpg?b=1&s=170667a&w=0&k=20&c=lnUXrKFxY4V6GdYmUm8XcbJJ66vI87WjB79CVKuXjvE="
          }}
          style={styles.imageUser}
        />
        <View style={styles.mainReview}>
          <Text style={{ color: '#ccc' }}>{item.datetime} ago</Text>
          <Text style={{ color: '#ccc', opacity: 0.5, }}>{item.comment}</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  imageUser: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  containReview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 0
  },
  mainReview: {
    marginLeft: 20,
  },
  line: { borderTopWidth: 0.5, borderColor: '#ccc', opacity: 0.5, marginTop: 15 }
})