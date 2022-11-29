import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import RelatedItem from './Related/RelatedItem'

import axios from 'axios'
import baseUrl from '../../common/baseUrl'
// data
import products from '../../assets/data/products.json'


export default function Related({ item }) {
  const [listRelated, setListRelated] = useState([])
  useEffect(() => {
    axios.get(`${baseUrl}dishes`)
      .then((res) => res.data)
      .then((data) => {
        const _listRelated = data.filter((product) =>
          product.category._id == item.category._id
          && product.name != item.name
        )
        setListRelated(_listRelated)
      })
  }, [])

  return (
    listRelated.length != 0 ?
      <View style={styles.container} >
        <View style={styles.header}>
          <Text style={styles.title}>Related Food</Text>
          <Text style={{ fontSize: 15, color: '#ccc', opacity: 0.5, paddingRight: 20 }}>See all</Text>
        </View>
        <View>
          <FlatList
            style={{ marginTop: 10 }}
            data={listRelated}
            renderItem={(relatedItem) =>
              <RelatedItem itemRelate={relatedItem} />
            }
            horizontal={true}
            keyExtractor={relatedItem => `${relatedItem._id}`}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      : <View style={styles.noItem}>
        <View style={styles.header}>
          <Text style={styles.title}>Related Food</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View style={{
            width: '90%',
            height: '100%',
            borderWidth: 3,
            borderColor: '#ccc',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.5,
          }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ccc', }}>No Products</Text>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingLeft: 20,
  },
  title: { fontSize: 20, color: 'white', fontWeight: 'bold' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  noItem: {
    marginTop: 20,
    width: '100%',
    height: 100,
    paddingHorizontal: 20,
    marginBottom: 30,
  }

})