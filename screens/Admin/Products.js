import {
  StyleSheet, Text, View, Image, TextInput,
  ScrollView, StatusBar, Platform, FlatList,
  SafeAreaView, ActivityIndicator, Dimensions, Modal,
  TouchableOpacity
} from 'react-native'
import React, { useCallback, useState, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { COLOR } from '../../assets/font/color'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import baseUrl from '../../common/baseUrl'

// component
import Loading from '../../components/Loading'
import ListItem from './ListItem'

// icon
import { AntDesign, Entypo } from '@expo/vector-icons';

const { height } = Dimensions.get("window")

export default function Products(props) {
  const [productList, setProductList] = useState()
  const [productFilter, setProductFilter] = useState()
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState()
  const [focus, setFocus] = useState();

  // delete dishes
  const deleteDish = (id) => {
    setLoading(true)
    axios
      .delete(`${baseUrl}dishes/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        const productsCalled = productFilter.filter((item) => item._id !== id)
        setProductFilter(productsCalled)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }

  const searchProduct = (text) => {
    if (text.length === 0) {
      setProductFilter(productList)
    }
    else {
      setProductFilter(productList.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      ))
    }
  }
  useFocusEffect(
    useCallback(() => {
      setLoading(true)
      AsyncStorage.getItem("jwt")
        .then((res) => setToken(res))
        .catch((error) => console.log(error))

      axios
        .get(`${baseUrl}dishes`)
        .then((res) => {
          setProductList(res.data)
          setProductFilter(res.data)
          setLoading(false)
        })
      return () => {
        setProductList()
        setProductFilter()
        setLoading()
      }
    }, [])
  )
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image
          source={require('../../assets/images/search.png')}
          style={styles.searchIcon}
          resizeMode="contain"
        />
        <TextInput
          placeholder="Search product"
          placeholderTextColor="rgba(255, 255, 255, 0.8)"
          style={styles.searchInput}
          // onFocus={openList}
          onChangeText={(text) => searchProduct(text)}
        />
        {focus == true ? (
          <AntDesign name="closecircle" size={16} color="white" onPress={onBlur} style={styles.closeIcon} />
        ) : null}
      </View>
      <View style={{ borderBottomWidth: 1, borderColor: '#ccc', marginTop: 20, opacity: 0.5 }}></View>


      <View style={styles.productsList}>
        {
          // console.log(loading)
          loading ? <View style={styles.spinner}><Loading /></View> : (
            <FlatList
              data={productFilter}
              renderItem={(item, index) => (<ListItem item={item.item} navigation={props.navigation} delete={deleteDish} />)}
              keyExtractor={(item) => item._id}
            />
          )
        }
      </View>
      <View style={styles.buttonTabContainer}>
        {/* <TouchableOpacity style={styles.buttonChangeTab}
          onPress={() => props.navigation.navigate("Orders")}
        >
          <Entypo name="plus" size={24} color="white" />
          <Text style={styles.titleButtonChangeTab}>Orders</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.buttonChangeTab}
          onPress={() => props.navigation.navigate("ProductForm")}
        >
          <View>

            <Entypo name="plus" size={24} color="white" />
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.buttonChangeTab}
          onPress={() => props.navigation.navigate("Categories")}
        >
          <Entypo name="plus" size={24} color="white" />
          <Text style={styles.titleButtonChangeTab}>Categories</Text>
        </TouchableOpacity> */}
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLOR.mainColor,
    paddingTop: StatusBar.currentHeight + 10,
    flex: 1
    // height: '100%'
  },
  searchContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',

  },
  searchInput: {
    // position: 'absolute',
    backgroundColor: "rgba(225, 225, 225, 0.3)",
    color: 'white',
    borderRadius: 10,
    padding: 10,
    // paddingLeft: 60,
    width: '80%',
    marginHorizontal: 10
  },
  searchIcon: {
    height: 30,
    marginLeft: 8,
  },
  productsList: {
    flex: 1,
    paddingHorizontal: 20,
    width: '100%',
  },
  spinner: {
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTabContainer: {
    marginTop: 20,
    width: 60,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30, right: 20,
    borderRadius: 200,

  },
  buttonChangeTab: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    backgroundColor: COLOR.secondaryColor,
  },

})