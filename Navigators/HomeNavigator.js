import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import ProductContainer from "../screens/product/ProductContainer";
import SingleProduct from '../screens/product/SingleProduct';
// import Slides from '../screens/Onboarding'
// import Landing from '../screens/User/Landing'
// import Login from '../screens/User/Login'


const Stack = createNativeStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName='ProductContainer' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductContainer" component={ProductContainer} />
      {/* <Stack.Screen name="Slides" component={Slides} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} /> */}

      <Stack.Screen name="Product Detail" component={SingleProduct} />
    </Stack.Navigator>
  )
}

export default function MyStack() {
  return <HomeNavigation />
}

const styles = StyleSheet.create({})