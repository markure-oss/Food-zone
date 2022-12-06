import React, { useEffect, useState } from "react";
import { Text, View, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

//components
import FormContainer from "../../../components/Form/FormContainer";
import Input from "../../../components/Form/Input";

import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { retry } from "@reduxjs/toolkit/query";

import { COLOR } from "../../../assets/font/color";
import Error from "../../../components/User/Error"
const Checkout = (props) => {
  const [orderItems, setOrderItems] = useState();
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();
  const [user, setUser] = useState();
  const [selected, setSelected] = useState("");
  const [error, setError] = useState('');
  useEffect(() => {
    setOrderItems(props.cartItems)

    return () => {
      setOrderItems();
    }
  }, [])

  const checkOut = () => {
    let order = {
      city,
      dataOrdered: Date.now(),
      orderItems,
      phone,
      shippingAddress1: address,
      shippingAddress2: address2,
      zip
    }

    if (order.city == "" || order.orderItems == "" || order.shippingAddress1 == "" ||
      order.shippingAddress2 == "") {
      setError("Fields is required")
    }
    else {
      props.navigation.navigate("Payment", { order: order })
    }
  }


  return (
    <ScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
      style={{ backgroundColor: COLOR.mainColor }}
    >
      <FormContainer title={"Shipping Address"}>
        <Input
          placeholder={"phone"}
          name={"phone"}
          value={phone}
          keyboardType={"numeric"}
          onChangeText={(text) => {
            setPhone(text)
            setError('')
          }}
        />
        <Input
          placeholder={"Shipping Address 1"}
          name={"ShippingAddress1"}
          value={address}
          onChangeText={(text) => {
            setAddress(text)
            setError('')
          }}
        />
        <Input
          placeholder={"Shipping Address 2"}
          name={"ShippingAddress2"}
          value={address2}
          onChangeText={(text) => {
            setAddress2(text)
            setError('')
          }}
        />
        <Input
          placeholder={"City"}
          name={"city"}
          value={city}
          onChangeText={(text) => {
            setCity(text)
            setError('')
          }}
        />
        <Input
          placeholder={"Zip Code"}
          name={"zip"}
          value={zip}
          keyboardType={"numeric"}
          onChangeText={(text) => {
            setError('')
            setZip(text)
          }}
        />
        {error ? <Error message={error} /> : null}
        <TouchableOpacity style={{ fontSize: 15, color: 'white' }} onPress={() => checkOut()} >
          <LinearGradient colors={['rgba(232, 192, 61, 1)', 'rgba(190, 100, 109, 1)']}
            style={{ padding: 10, paddingHorizontal: 25, borderRadius: 8, marginTop: 20 }}
            end={{ x: 1, y: 0.5 }}
          >
            <Text style={{ fontSize: 15, color: 'white', padding: 5, paddingHorizontal: 20 }}>Confirm</Text>
          </LinearGradient>
        </TouchableOpacity>

      </FormContainer>
    </ScrollView>
  )
}

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  }
}

const styles = StyleSheet.create({
  picker: {},
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
})

export default connect(mapStateToProps)(Checkout);