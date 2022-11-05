import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { MaterialIcons, AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { COLOR } from '../assets/font/color'
export default function Login() {
  const [isDisplayPassword, setIsDisplayPassword] = useState(false)
  const handleDisplayPassword = () => {
    setIsDisplayPassword(!isDisplayPassword)
  }
  return (
    <View style={styles.container}>
      <View style={{ borderWidth: 5, borderColor: COLOR.mainColor, padding: 5, borderRadius: 15 }}>
        <MaterialIcons name="restaurant" size={100} color={COLOR.mainColor} />
      </View>
      <View style={styles.mainContent}>
        <View style={styles.Input}>
          <TextInput
            style={{ width: '100%' }}
            placeholder="Email or Phone Number"
            placeholderTextColor={COLOR.mainColor}
          />
        </View>
        <View style={[styles.Input, { justifyContent: 'space-between' }]}>
          <TextInput
            style={{ width: '100%' }}
            placeholder="Password"
            placeholderTextColor={COLOR.mainColor}
            secureTextEntry={isDisplayPassword}
          />
          <TouchableOpacity
            style={{ position: 'absolute', right: 0 }}
            onPress={handleDisplayPassword}>
            {isDisplayPassword ?
              <Ionicons name="eye" size={24} color={COLOR.mainColor} />
              : <Ionicons name="eye-off" size={24} color={COLOR.mainColor} />
            }
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'white' }}>Login</Text>
        </TouchableOpacity>
        <View style={styles.listBtn}>
          <TouchableOpacity style={styles.smallBtn}>
            <AntDesign name="google" size={24} color={COLOR.mainColor} />
          </TouchableOpacity>
          <View style={{ width: 20 }}></View>
          <TouchableOpacity style={styles.smallBtn}>
            <FontAwesome name="twitter" size={24} color={COLOR.mainColor} />
          </TouchableOpacity>
          <View style={{ width: 20 }}></View>
          <TouchableOpacity style={styles.smallBtn}>
            <FontAwesome name="facebook" size={24} color={COLOR.mainColor} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  mainContent: {
    marginTop: 20,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Input: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 2,
    borderColor: COLOR.mainColor,
    paddingBottom: 5,
    fontSize: 20,
    marginTop: 30,
    alignItems: 'center'
  },
  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    height: 50,
    width: '100%',
    borderWidth: 3,
    borderColor: COLOR.mainColor,
    borderRadius: 50,
    backgroundColor: COLOR.mainColor
  },
  listBtn: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 50
  },
  smallBtn: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: COLOR.mainColor,
    borderRadius: 20,
    padding: 5,
  }
})

