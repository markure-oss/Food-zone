import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import ProductContainer from "../screens/product/ProductContainer";
import SingleProduct from '../screens/product/SingleProduct';
const Stack = createNativeStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName='SignUp' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductContainer" component={ProductContainer} />
      <Stack.Screen name="Product Detail" component={SingleProduct} />


    </Stack.Navigator>
  )
}

export default function MyStack() {
  return <HomeNavigation />
}

const styles = StyleSheet.create({})