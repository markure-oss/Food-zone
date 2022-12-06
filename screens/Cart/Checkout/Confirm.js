import React from "react";
import { Text, View, ScrollView, StyleSheet, Dimensions, FlatList } from 'react-native';

// import { connect } from "react-redux";
import { COLOR } from "../../../assets/font/color"
import { cartItemsSelector } from '../../../redux/selector';
import { useSelector } from 'react-redux'
let { height, width } = Dimensions.get("window")

// component
import OrderItems from '../../../components/Cart/OrderItems'

const ConfirmScreen = (props) => {
  const confirm = props.route.params;
  const orderItems = useSelector(cartItemsSelector)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#ccc", marginBottom: 20 }}>
          Confirm Order
        </Text>
        {props.route.params ?
          <View style={{ borderWidth: 1, borderColor: 'orange', width: '100%', paddingHorizontal: 20, borderRadius: 20 }}>
            <Text style={styles.title}>Shipping to: </Text>
            <View style={{ padding: 8 }}>
              <Text style={styles.label}>Phone: {confirm.order.order.phone}</Text>
              <Text style={styles.label}>Address: {confirm.order.order.shippingAddress1}</Text>
              <Text style={styles.label}>Address2: {confirm.order.order.shippingAddress2}</Text>
              <Text style={styles.label}>City: {confirm.order.order.city}</Text>
              <Text style={styles.label}>Zip Code: {confirm.order.order.zip}</Text>
            </View>
            <Text style={styles.title}>Items: </Text>
            <View style={{ marginBottom: 20 }}>
              {
                orderItems ? orderItems.map((orderItem, index) =>
                  <OrderItems key={orderItem._id} orderItem={orderItem} />

                ) : <Text style={{ fontSize: 20, fontWeight: "bold", color: "#ccc", marginBottom: 20 }}>Empty</Text>
              }
            </View>
          </View>
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