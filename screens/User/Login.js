import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { COLOR } from '../../assets/font/color'

// Context
import AuthGlobal from '../../Context/store/AuthGlobal'
import { loginUser } from '../../Context/actions/Auth.actions'
// component
import Error from '../../components/User/Error'

export default function Login({ navigation }) {
  const context = useContext(AuthGlobal)
  const [isDisplayPassword, setIsDisplayPassword] = useState(true)
  const handleDisplayPassword = () => {
    setIsDisplayPassword(!isDisplayPassword)
  }

  const [password, setPassword] = useState('1234')
  const [email, setEmail] = useState('1234@gmail.com')
  const [error, setError] = useState('')

  useEffect(() => {
    if (context.stateUser.isAuthenticated === true) {
      navigation.navigate("Main")
    }
  }, [context.stateUser.isAuthenticated])
  const handleClickLogin = () => {
    const user = {
      email,
      password
    }
    if (email == '' || password == '') {
      setError("Please fill in your credentials")
    }
    else {
      loginUser(user, context.dispatch)
    }
  }

  return (
    <ImageBackground
      source={require('../../assets/images/image-login-1.jpg')}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: 'center', height: '45%' }}
    >
      <LinearGradient colors={['rgba(107, 107, 107, 0.5)', 'rgba(0, 0, 0, 0.8)']} style={{ flex: 1 }}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome Back</Text>
          <View style={styles.Input}>
            <TextInput
              style={{ width: '100%', color: 'white' }}
              placeholder="Email or Phone Number"
              placeholderTextColor={'#ccc'}
              value={email}
              id={"email"}
              name={"email"}
              onChangeText={(text) => {
                setEmail(text)
                setError('')
              }}
            />
          </View>
          <View style={[styles.Input, { justifyContent: 'space-between' }]}>
            <TextInput
              style={{ width: '100%', color: 'white' }}
              placeholder="Password"
              placeholderTextColor={'#ccc'}
              secureTextEntry={isDisplayPassword}
              value={password}
              name={"password"}
              id={"password"}
              onChangeText={(text) => {
                setPassword(text)
                setError('')
              }}

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
          {error ? <Error message={error} /> : null}
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleClickLogin()}
          >
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
            }}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={{
                color: COLOR.secondaryColor,
                fontSize: 18,
              }}>Sign Up</Text>
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
    backgroundColor: COLOR.mainColor,
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
    backgroundColor: '#53555e',
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