import { View, Text, StyleSheet, Platform, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Footer, { currentPage } from "../components/Footer"
import { Ionicons, Fontisto } from '@expo/vector-icons'
import Profile from './Profile'
import Home from './navigation/Home'
import Notifications from './Notifications'
import { useSelector } from 'react-redux'
import { pageSelector } from '../redux/selector'
import { COLOR } from '../assets/font/color'

export default function Main() {
  const page = useSelector(pageSelector)
  // console.log(page.pageCurrent)
  return (
    <View style={styles.container}>
      {
        page === "Home" ? <Home />
          : page === "Profile" ? <Profile />
            : page === "Notifications" ? <Notifications />
              : page === "Category" ? <Profile /> : false
      }
      <Footer />
    </View >
  )
}


const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: COLOR.mainColor,
  },
})