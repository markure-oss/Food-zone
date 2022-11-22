import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Onboarding from '../screens/Onboarding';
import Profile from '../screens/Profile';
import Main from '../screens/Main';
import Landing from '../screens/Landing';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp'
import ProductContainer from "../screens/product/ProductContainer";


const Stack = createNativeStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName='Slides' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="ProductContainer" component={ProductContainer} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Slides" component={Onboarding} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

export default function MyStack() {
  return <HomeNavigation />
}

const styles = StyleSheet.create({})