import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
// import gallery from '../../assets/data/gallery.json'

// data
import baseUrl from '../../common/baseUrl'
import axios from 'axios'
export default function Gallery({ _id }) {
  const [length, setLength] = useState(3)
  const [gallery, setGallery] = useState([])
  useEffect(() => {
    axios
      .get(`${baseUrl}dishes/${_id}`)
      .then((res) => res.data)
      .then((data) => setGallery(data.images))
      .catch((err) => console.log("Error API"))
  }, [_id])
  const galleryDisplay = []
  for (let i = 0; i < length; i++) {
    galleryDisplay.push(gallery[i])
  }
  let lengthGallery = galleryDisplay.length
  const imageOfGallery = ({ index }) => {
    lengthGallery -= 1
    return (
      <>
        <View style={{
          width: 300,
          height: 150,
          marginRight: 10,
          borderWidth: 0.5,
          borderColor: '#ccc',
          borderRadius: 10,
        }}>
          <Image
            resizeMode="cover"
            style={{ backgroundColor: '#ccc', flex: 1, borderRadius: 10 }}
            source={{ uri: galleryDisplay[index] ? galleryDisplay[index] : 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' }}
          />
        </View>
        {
          lengthGallery == 0 ?
            <TouchableOpacity style={{
              flex: 1,
              backgroundColor: '#ccc',
              borderRadius: 10,
              padding: 20,
              paddingHorizontal: 40,
              justifyContent: 'center',
              opacity: 0.7
            }}
              onPress={() => setLength(gallery.length)}
            >
              <Text style={{ fontSize: 15 }}>See All</Text>
            </TouchableOpacity> : true
        }
      </>
    )
  }
  return (
    <View>
      <FlatList
        style={{ marginTop: 10, marginLeft: 20 }}
        data={galleryDisplay}
        renderItem={imageOfGallery}
        horizontal={true}
        // keyExtractor={item => `${item.id}`}
        keyExtractor={(item, index) => index}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({})