import { View, Text, StyleSheet, Platform, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Footer, { currentPage } from "../components/Footer"
import { Ionicons, Fontisto } from '@expo/vector-icons'
import Profile from './Profile'
import Home from './Home'
import { useSelector } from 'react-redux'
import { pageSelector } from '../redux/selector'
export default function Main() {
  const page = useSelector(pageSelector)
  // console.log(page.pageCurrent)
  return (
    <View style={styles.container}>
      {
        page === "Profile" ? <Profile /> : <Home />
      }
      <Footer />
    </View >
  )
}


const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: '#1E2A3F',
  },
})