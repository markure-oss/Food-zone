import React from "react";
import { Text, View, ScrollView, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message'
import { LinearGradient } from "expo-linear-gradient";

// import { connect } from "react-redux";
import { COLOR } from "../../../assets/font/color"

// all api
import axios from 'axios'
import baseUrl from '../../../common/baseUrl'

// redux
import { cartSlice } from '../../../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'

let { height, width } = Dimensions.get("window")

// component
import OrderItems from '../../../components/Cart/OrderItems'

const ConfirmScreen = (props) => {
  const finalOrder = props.route.params
  const dispatch = useDispatch()
  const confirmOrder = () => {
    const order = finalOrder.order.order
    axios
      .post(`${baseUrl}orders`, order)
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          Toast.show({
            topOffset: 60,
            type: 'success',
            text1: 'Order Complete',
            text2: ''
          })
          setTimeout(() => {
            dispatch(cartSlice.actions.removeAll())
            props.navigation.navigate("ProductContainer")
          }, 500)
        }
      })
      .catch((err) => {
        Toast.show({
          topOffset: 60,
          type: 'error',
          text1: 'Some went wrong',
          text2: 'Please try again'
        })
      })
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#ccc", marginBottom: 20 }}>
          Confirm Order
        </Text>
        {props.route.params ?
          <>
            <View style={{ borderWidth: 1, borderColor: 'orange', width: '100%', paddingHorizontal: 20, borderRadius: 20 }}>
              <Text style={styles.title}>Shipping to: </Text>
              <View style={{ padding: 8 }}>
                <Text style={styles.label}>Phone: {finalOrder.order.order.phone}</Text>
                <Text style={styles.label}>Address: {finalOrder.order.order.shippingAddress1}</Text>
                <Text style={styles.label}>Address2: {finalOrder.order.order.shippingAddress2}</Text>
                <Text style={styles.label}>City: {finalOrder.order.order.city}</Text>
                <Text style={styles.label}>Zip Code: {finalOrder.order.order.zip}</Text>
              </View>
              <Text style={styles.title}>Items: </Text>
              <View style={{ marginBottom: 20 }}>
                {
                  finalOrder.order.order.orderItems ? finalOrder.order.order.orderItems.map((orderItem, index) =>
                    <OrderItems key={orderItem._id} orderItem={orderItem} />

                  ) : <Text style={{ fontSize: 20, fontWeight: "bold", color: "#ccc", marginBottom: 20 }}>Empty</Text>
                }
              </View>
            </View>
            <TouchableOpacity style={{ fontSize: 15, color: 'white' }} onPress={() => confirmOrder()} >
              <LinearGradient colors={['rgba(232, 192, 61, 1)', 'rgba(190, 100, 109, 1)']}
                style={{ padding: 10, paddingHorizontal: 25, borderRadius: 8, marginTop: 20 }}
                end={{ x: 1, y: 0.5 }}
              >
                <Text style={{ fontSize: 15, color: 'white', padding: 5, paddingHorizontal: 20 }}>Confirm Order</Text>
              </LinearGradient>
            </TouchableOpacity>
          </>
          : null}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 8,
    alignItems: "center",
    backgroundColor: COLOR.mainColor,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    width: '100%',
  },
  title: {
    margin: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: COLOR.secondaryColor,
  },
  label: {
    margin: 8,
    fontWeight: "bold",
    color: "#ccc",
  },
  listItems: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    width: width / 1.2,
  }
})

export default ConfirmScreen;