import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { COLOR } from '../assets/font/color'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// NavigatorStack
import HomeNavigation from './HomeNavigator'
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import OrderOfUser from '../screens/User/OrdersOfUser'
import AdminNavigator from './AdminNavigator'
import AuthGlobal from '../Context/store/AuthGlobal'
const Tab = createMaterialBottomTabNavigator()
export default function Main() {
  const context = useContext(AuthGlobal)
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
        name="Notifications"
        component={Notifications}
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
        component={Profile}
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
      {
        context.stateUser.user.isAdmin ? <Tab.Screen
          name="AdminNavigator"
          component={AdminNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <View>
                <Icon
                  name="gear"
                  style={{ position: 'relative' }}
                  color={color}
                  size={25}
                />
              </View>
            )
          }}
        /> : <Tab.Screen
          name="OrderOfUser"
          component={OrderOfUser}
          options={{
            tabBarIcon: ({ color }) => (
              <View>
                <Icon
                  name="gear"
                  style={{ position: 'relative' }}
                  color={color}
                  size={25}
                />
              </View>
            )
          }}
        />
      }
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})