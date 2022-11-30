import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Onboarding from "../screens/Onboarding"
import UserNavigator from "./UserNavigator"
import Main from "./Main"
const Stack = createNativeStackNavigator();

function FirstOpenApp() {
  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="UserNavigator" component={UserNavigator} />
    </Stack.Navigator>
  )
}

export default function MyStack() {
  return <FirstOpenApp />
}
