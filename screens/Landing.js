import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function Landing({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/images/monika-grabkowska-jsgJtBOR6jY-unsplash.jpg')}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <LinearGradient colors={['rgba(107, 107, 107, 0.5)', 'rgba(0, 0, 0, 0.8)']} style={{ flex: 1 }}>
        <View style={styles.content}>
          <Text style={styles.textMain}>Delivered fast food to your door.</Text>
          <Text style={styles.description}>Set exact location to find the right restaurant near you</Text>
        </View>
        <View style={styles.boxButton}>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <LinearGradient colors={['rgba(232, 192, 61, 1)', 'rgba(190, 100, 109, 1)']}
              style={styles.linearColor}
              end={{ x: 1, y: 0.5 }}
            >
              <Text style={{ fontSize: 20, color: 'white' }}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#3677d0' }]}>
            <Text style={{ fontSize: 20, color: 'white' }}>Already have an account</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground >
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    height: '80%',
    justifyContent: 'center',
    padding: 20,
  },
  textMain: {
    marginTop: 150,
    marginBottom: 30,
    color: 'white',
    fontSize: 50,
    width: '80%',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  description: {
    color: 'rgba(196, 196, 196, 0.8)',
    width: '100%',
    fontSize: 19,
    marginBottom: 50,
    fontWeight: 'bold'
  },
  boxButton: {
    height: '20%',
    alignItems: 'center'
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
    marginBottom: 20,
    borderRadius: 35,
  }
})