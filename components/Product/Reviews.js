import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ReviewItem from './Reviews/ReviewItem'
// data
import reviews from '../../assets/data/reviews.json'
export default function Reviews() {
  const reviewsContent = reviews
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Reviews</Text>
        <Text style={{ fontSize: 15, color: '#ccc', opacity: 0.5 }}>See all</Text>
      </View>
      <View>
        <Text style={{ fontSize: 15, color: '#ccc', opacity: 0.5 }}> 128 Number Reviews</Text>
        <View style={styles.listReviews}>
          {
            reviewsContent.map((item) =>
              <ReviewItem key={item._id.$oid} item={item} />
            )
          }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: { fontSize: 20, color: 'white', fontWeight: 'bold' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})