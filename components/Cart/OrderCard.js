import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLOR } from '../../assets/font/color'
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-toast-message'


import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import baseUrl from '../../common/baseUrl'




const codes = [
  { name: "Pending", code: "3" },
  { name: "Shipped", code: "2" },
  { name: "Delivered", code: "1" },
]

export default function OrderCard(props) {
  const { order, isAdmin } = props
  const [orderStatus, setOrderStatus] = useState(order.status)
  const [statusText, setStatusText] = useState()
  const [statusChange, setStatusChange] = useState()
  const [token, setToken] = useState()
  const [cardColor, setCardColor] = useState()
  const [pickerValue, setPickerValue] = useState()


  useEffect(() => {
    AsyncStorage.getItem('jwt')
      .then((res) => {
        setToken(res)
      })
    if (order.status == "Pending") {
      setCardColor("#E74C3C")
    } else if (order.status == "Shipped") {
      setCardColor("#F1C40F")
    } else {
      setCardColor("#2ECC71")
    }
    return () => {
      setCardColor("")
    }
  }, [])
  const updateOrder = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const _orderUpdate = {
      ...order,
      status: statusChange
    }
    axios
      .put(`${baseUrl}orders/${order._id}`, _orderUpdate, config)
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          Toast.show({
            topOffset: 60,
            type: 'success',
            text1: 'Change Status Successfully!',
            text2: ''
          })
          setTimeout(() => {
            // dispatch(cartSlice.actions.removeAll())
            props.navigation.navigate("Products")
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
  const received = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }
    axios
      .delete(`${baseUrl}orders/${order._id}`, config)
      .then((res) => {
        Toast.show({
          topOffset: 60,
          type: 'success',
          text1: 'Thank you!',
          text2: ''
        })
      })
      .catch((err) => console.log(err))
    props.navigation.navigate("ProductContainer")
  }
  return (
    <View style={styles.container}>
      <View style={{ width: "80%", borderColor: cardColor, padding: 20, borderRadius: 10, borderWidth: 2 }}>
        <Text style={styles.label}>Order Number:</Text>
        <Text style={{ color: "#ccc" }}>{order._id}</Text>
        <Text style={styles.label}>Date Ordered:</Text>
        <Text style={{ color: "#ccc", marginLeft: 20 }}>{order.dateOrdered}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text style={styles.label}>Status:</Text>
          <Text style={{ color: cardColor, marginLeft: 5 }}>{order.status}</Text>
          {
            Platform.OS == "android"
              ? <Text style={{ width: 10, height: 10, backgroundColor: cardColor, borderRadius: 10, marginBottom: 3, marginLeft: 5 }}></Text>
              : <View style={{ width: 10, height: 10, backgroundColor: cardColor, borderRadius: 10, marginBottom: 3, marginLeft: 5 }}></View>
          }
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text style={styles.label}>City:</Text>
          <Text style={{ color: "#ccc", marginLeft: 5 }}>{order.city}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text style={styles.label}>Address:</Text>
          <Text style={{ color: "#ccc", marginLeft: 5 }}>{order.shippingAddress2}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text style={styles.label}>Total Price:</Text>
          <Text style={{ color: "#ccc", marginLeft: 5, color: COLOR.secondaryColor, fontWeight: 'bold', fontSize: 15 }}> ${order.totalPrice}</Text>
        </View>
        {
          isAdmin === true ?
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Picker
                mode="dialog"
                // style={{ width: undefined }}
                dropdownIconColor={"#ccc"}
                selectedValue={pickerValue}
                style={{ width: '50%', color: '#fff' }}
                onValueChange={(itemValue, itemIndex) => {
                  setPickerValue(itemValue)
                  setStatusChange(itemValue)
                }}
              >
                {
                  codes.map((code, index) => {
                    return <Picker.Item key={code.code} label={code.name} value={code.name} style={{color: "#fff"}}/>
                  })
                }
              </Picker>
              <TouchableOpacity
                style={{
                  backgroundColor: '#33bbff',
                  padding: 10,
                  paddingHorizontal: 20,
                  borderRadius: 10,
                  marginRight: 10
                }}
                onPress={() => updateOrder()}
              >
                <Text style={{ color: 'white' }}>Update</Text>
              </TouchableOpacity>
            </View>
            : order.status === "Delivered" ?
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 10 }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#33bbff',
                    padding: 10,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                    marginRight: 10
                  }}
                  onPress={() => received()}
                >
                  <Text style={{ color: 'white' }}>Received</Text>
                </TouchableOpacity>
              </View>
              : null
        }

      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20
  },
  label: {
    color: "#ccc",
    fontSize: 17,
    fontWeight: '600'
  }
})