import {
  StyleSheet,
  Text, View,
  ScrollView,
  SafeAreaView, Platform, StatusBar,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

import { COLOR } from '../../assets/font/color'
export default function Setting() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.title}>Setting</Text>
      </View>
      <View style={styles.mainContent}>
        <ScrollView style={{
          width: '100%',
        }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.titleButton}>
              Chat With App
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.titleButton}>
              Setting Notifications
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.titleButton}>
              Languages
            </Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <LinearGradient colors={['rgba(190, 100, 109, 1)', 'rgba(232, 192, 61, 1)']}
              style={[styles.button, { alignItems: 'center', padding: 15 }]}
              end={{ x: 1, y: 0.5 }}>
              <Text style={[styles.titleButton, { color: 'white', fontSize: 20 }]}>
                Logout
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.mainColor,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
  },
  mainContent: {
    backgroundColor: COLOR.mainColor,
    height: '100%',
    paddingHorizontal: 20
  },
  button: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10
  },
  titleButton: {
    fontSize: 17,
  }

})