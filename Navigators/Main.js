import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { COLOR } from '../assets/font/color'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// NavigatorStack
import HomeNavigation from './HomeNavigator'
import CartNavigator from './CartNavigator'

const Tab = createMaterialBottomTabNavigator()
export default function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={COLOR.secondaryColor}
      inactiveColor="white"
      barStyle={{ backgroundColor: COLOR.mainColor }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLOR.secondaryColor
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home"
              style={{ position: 'relative' }}
              color={color}
              size={25}
            />
          )
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="shopping-cart"
              style={{ position: 'relative' }}
              color={color}
              size={25}
            />
          )
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="bell"
              style={{ position: 'relative' }}
              color={color}
              size={25}
            />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="user"
              style={{ position: 'relative' }}
              color={color}
              size={25}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})