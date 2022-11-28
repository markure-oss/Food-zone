import {
  StyleSheet, Text, View, ScrollView,
  Image, ImageBackground, TouchableOpacity,
  StatusBar
} from 'react-native'
import React, { useMemo, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { COLOR } from '../../assets/font/color'

// redux
import { useDispatch } from 'react-redux'
import { cartSlice } from '../../redux/slices/cartSlice'

// icon
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';

// component
import Gallery from '../../components/Product/Gallery';
import OptionButton from '../../components/Product/OptionButton'
import Reviews from '../../components/Product/Reviews'
import Related from '../../components/Product/Related';

export default function SingleProduct(props) {
  const dispatch = useDispatch()
  const [item, setItem] = useState(props.route.params.item)
  const [availability, setAvailability] = useState('')
  const handleClickAdd = () => {
    dispatch(cartSlice.actions.addToCard(item))
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={{
            uri: item.image ? item.image : 'https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage_icon-1.png'
          }}
          resizeMode="cover"
          style={styles.image}
        >
          <LinearGradient colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.7)']} style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ position: 'absolute', top: 40, left: 20 }}
              onPress={() => props.navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={30} color="white" />
            </TouchableOpacity>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
        <Text style={{ fontSize: 25, color: 'white', fontWeight: '600' }}>{item.name}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <View style={styles.rating}>
            <Text style={{ color: '#ccc', }}>{item.rating.toFixed(1)}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
              <FontAwesome name="star" size={14} color="#FDCC0D" />
            </View>
          </View>
          <Text style={{ color: COLOR.secondaryColor, fontSize: 25, fontWeight: 'bold' }}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
      <OptionButton />
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={styles.title}>About</Text>
        <Text style={{ fontSize: 15, color: '#ccc', opacity: 0.5, marginTop: 5, textAlign: 'justify' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias sequi
          praesentium, sapiente nulla soluta beatae accusantium quo doloremque minus natus
          distinctio. Molestiae consectetur doloribus tempora voluptate odio recusandae
          minima sunt eveniet unde? Rem aliquid blanditiis, quasi obcaecati quaerat ipsam
          vel facilis animi saepe neque odio quae dolorem doloremque! Facilis enim tempora
          nemo assumenda repellat nesciunt nobis sit tenetur! Perspiciatis consectetur,
          placeat corrupti cum ea doloribus odio quisquam repellat vitae quod, asperiores
          dolor corporis mollitia inventore nemo? Fuga ducimus hic cupiditate praesentium
          delectus iste corporis, impedit laborum perferendis placeat odio qui unde dolor
          ipsa suscipit nostrum tempore voluptas maiores quis porro!
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={styles.title}>Location</Text>
        <ImageBackground
          resizeMode='cover'
          source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/153/588/original/vector-roadmap-location-map.jpg' }}
          style={styles.detailLocation}
        >
          <View style={styles.optionZoom}>
            <TouchableOpacity style={[styles.zoomButton, { borderWidth: 0.5, borderColor: 'black' }]}>
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.zoomButton}>
              <Ionicons name="remove" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={[styles.title, { paddingLeft: 20, }]}>Gallery</Text>
        <Gallery />
      </View>
      <Reviews />
      <Related item={item} />
      <TouchableOpacity style={styles.button}
        onPress={() => handleClickAdd()}
      >
        <LinearGradient colors={['rgba(232, 192, 61, 1)', 'rgba(190, 100, 109, 1)']}
          style={styles.linearColor}
          end={{ x: 1, y: 0.5 }}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>
            Add To Your Cart
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.mainColor
  },
  header: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 300,
  },
  rating: {
    flexDirection: 'row',
  },

  linearColor: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 60,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: { fontSize: 20, color: 'white', fontWeight: 'bold' },
  detailLocation: {
    width: '100%',
    height: 200,
    marginTop: 20,
    opacity: 0.8
  },
  optionZoom: {
    position: 'absolute', bottom: 10, right: 10, borderWidth: 0.5, borderColor: 'black'
  },
  zoomButton: {
    padding: 8,
    backgroundColor: '#bdbdbd',
  }
})