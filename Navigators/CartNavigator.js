import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import CartScreen from "../screens/Cart/CartScreen";
const Stack = createNativeStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName='Cart Screen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart Screen" component={CartScreen} />
    </Stack.Navigator>
  )
}

export default function MyStack() {
  return <HomeNavigation />
}

const styles = StyleSheet.create({})