import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

export default function Login() {
  const [isDisplayPassword, setIsDisplayPassword] = useState(true)
  const handleDisplayPassword = () => {
    setIsDisplayPassword(!isDisplayPassword)
  }
  return (
    <ImageBackground
      source={require('../assets/images/fathul-abrar-T-qI_MI2EMA-unsplash.jpg')}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <LinearGradient colors={['rgba(107, 107, 107, 0.5)', 'rgba(0, 0, 0, 0.8)']} style={{ flex: 1 }}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome Back</Text>
          <View style={styles.Input}>
            <TextInput
              style={{ width: '100%', color: 'white' }}
              placeholder="Email or Phone Number"
              placeholderTextColor={'#ccc'}
            />
          </View>
          <View style={[styles.Input, { justifyContent: 'space-between' }]}>
            <TextInput
              style={{ width: '100%', color: 'white' }}
              placeholder="Password"
              placeholderTextColor={'#ccc'}
              secureTextEntry={isDisplayPassword}
            />
            <TouchableOpacity
              style={{ position: 'absolute', right: 20 }}
              onPress={handleDisplayPassword}>
              {isDisplayPassword ?
                <Ionicons name="eye" size={24} color={'#ccc'} />
                : <Ionicons name="eye-off" size={24} color={'#ccc'} />
              }
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button}>
            <LinearGradient colors={['rgba(232, 192, 61, 1)', 'rgba(190, 100, 109, 1)']}
              style={styles.linearColor}
              end={{ x: 1, y: 0.5 }}
            >
              <Text style={{ fontSize: 20, color: 'white' }}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
            <Text style={{
              fontSize: 15,
              color: 'white',
            }}>Don't have an account?</Text>
            <TouchableOpacity style={{
              height: '100%',
              alignItems: 'center',
              marginLeft: 5,
            }}>
              <Text style={{
                color: '#FB741D',
                fontSize: 18,
              }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground >
  )
}

const styles = StyleSheet.create({
  content: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    width: '100%',
    height: '60%',
    backgroundColor: '#1E2A3F',
    bottom: 0,
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  Input: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#374254',
    borderRadius: 10,
    fontSize: 20,
    marginTop: 30,
    alignItems: 'center',
    padding: 20,
  },
  linearColor: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '90%',
    borderRadius: 35,
    marginTop: 60,
    marginBottom: 20,
  },
})