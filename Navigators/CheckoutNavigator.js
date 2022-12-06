import React from "react";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Checkout from "../screens/Cart/Checkout/Checkout";
import Payment from "../screens/Cart/Checkout/Payment";
import Confirm from "../screens/Cart/Checkout/Confirm";
import { COLOR } from "../assets/font/color";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator style={{ marginTop: 40 }} >
      <Tab.Screen name="Shipping" component={Checkout} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Confirm" component={Confirm} />
    </Tab.Navigator>
  )
}

export default function CheckoutNavigator() {
  return <MyTabs />
};