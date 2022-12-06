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
import OrderIcon from '../../components/Cart/OrderIcon'
// icon
import { AntDesign, Entypo } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'

// redux
import { useDispatch } from 'react-redux'
import { orderPendingSlice } from '../../redux/slices/orderPending'


const { height } = Dimensions.get("window")

export default function Products(props) {
  const [productList, setProductList] = useState()
  const [productFilter, setProductFilter] = useState()
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState()
  const dispatch = useDispatch()

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

      axios
        .get(`${baseUrl}orders`)
        .then((res) => {
          const orderPending = res.data.filter(order => order.status == "Pending")
          dispatch(orderPendingSlice.actions.changeOrderPending(orderPending.length))
        })
        .catch((error) => {
          console.log(error)
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
          onChangeText={(text) => searchProduct(text)}
        />
        <TouchableOpacity style={{ marginLeft: 20 }}
          onPress={() => props.navigation.navigate("Orders")}
        >
          <Icon name="cart-arrow-down" color="white" size={30} />
          <OrderIcon />
        </TouchableOpacity>
      </View>
      <View style={{ borderBottomWidth: 1, borderColor: '#ccc', marginTop: 20, opacity: 0.5 }}></View>


      <View style={styles.productsList}>
        {
          // console.log(loading)
          loading ? <View style={styles.spinner}><Loading /></View> : (
            <>

              <FlatList
                data={productFilter}
                renderItem={(item, index) => (<ListItem item={item.item} navigation={props.navigation} delete={deleteDish} />)}
                keyExtractor={(item) => item._id}
              />
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
            </>

          )
        }
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLOR.mainColor,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight + 10 : 40,
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
    width: '60%',
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