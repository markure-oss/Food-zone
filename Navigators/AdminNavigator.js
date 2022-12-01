import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Products from "../screens/Admin/Products";
import Categories from "../screens/Admin/Categories";
import Orders from "../screens/Admin/Orders";
import ProductForm from "../screens/Admin/ProductForm";
import SingleProduct from '../screens/product/SingleProduct';



const Stack = createNativeStackNavigator();

function AdminNavigator() {
  return (
    <Stack.Navigator initialRouteName='Products' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="ProductForm" component={ProductForm} />
      <Stack.Screen name="Product Detail" component={SingleProduct} />


    </Stack.Navigator>
  )
}

export default function MyStack() {
  return <AdminNavigator />
}

const styles = StyleSheet.create({})