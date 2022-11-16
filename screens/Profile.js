import { View, Text, StyleSheet, Platform, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Footer, { currentPage } from "../components/Footer"
import { Ionicons, Fontisto } from '@expo/vector-icons'
import { COLOR } from '../assets/font/color'
const listButton = [
  {
    id: 1,
    name: "Profile",
    iconName: "ios-person-outline",
    sizeIcon: 24
  },
  {
    id: 2,
    name: "Category",
    iconName: "fast-food-outline",
    sizeIcon: 24
  },
  {
    id: 3,
    name: "Notifications",
    iconName: "notifications-outline",
    sizeIcon: 24
  },
  {
    id: 4,
    name: "Security",
    iconName: "lock-closed-outline",
    sizeIcon: 24
  },
  {
    id: 5,
    name: "Setting",
    iconName: "settings-outline",
    sizeIcon: 24
  },
]
export default function Profile() {
  return (
    <View>
      <Image
        style={{ height: 300 }}
        source={require("../assets/images/5870151cee14b617038b7150..png")}
      />
      <View style={{ position: 'absolute', flexDirection: 'row', top: 150, left: 30 }}>
        <Image
          style={{ width: 120, height: 120, borderRadius: 60 }}
          source={require("../assets/images/hamberger-slide.jpg")}
        />
        <View style={{ justifyContent: 'center', padding: 20 }}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>David Oscar</Text>
          <Text style={{ fontSize: 17, color: 'white', opacity: 0.8 }}>david@gmail.com</Text>
        </View>
      </View>
      <View >
        {
          listButton.map((button) => {
            return (
              <TouchableOpacity key={button.id}
                style={styles.button}>
                <View style={{
                  flexDirection: 'row', alignItems: 'center',
                }}>
                  <Ionicons name={button.iconName} size={button.sizeIcon} color="white" />
                  <Text style={{ fontSize: 17, marginLeft: 10, color: "white" }}>{button.name}</Text>
                </View>
                <View>
                  <Fontisto name="angle-right" size={15} color="white" />
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  button: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 0.3,
    borderColor: "#ccc"
  },
})