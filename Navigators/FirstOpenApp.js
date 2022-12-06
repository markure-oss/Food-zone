import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Onboarding from "../screens/Onboarding"
import UserNavigator from "./UserNavigator"
import Main from "./Main"
import Landing from '../screens/User/Landing'
const Stack = createNativeStackNavigator();

function FirstOpenApp() {
  return (
    <Stack.Navigator initialRouteName='Onboarding' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="UserNavigator" component={UserNavigator} />
      <Stack.Screen name="Landing" component={Landing} />

    </Stack.Navigator>
  )
}

export default function MyStack() {
  return <FirstOpenApp />
}
