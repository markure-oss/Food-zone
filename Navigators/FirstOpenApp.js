import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Onboarding from "../screens/Onboarding";

import Main from "./Main"
const Stack = createNativeStackNavigator();

function FirstOpenApp() {
  return (
    <Stack.Navigator initialRouteName='Onboarding' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  )
}

export default function MyStack() {
  return <FirstOpenApp />
}
