import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native'
import React, { useEffect, useState, useCallback, useContext } from 'react'
import { useFocusEffect } from '@react-navigation/native-stack'
import Footer, { currentPage } from "../components/Footer"
import { Ionicons, Feather } from '@expo/vector-icons'
import { COLOR } from '../assets/font/color'
import Loading from '../components/Loading'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import baseUrl from '../common/baseUrl'

// Context
import AuthGlobal from '../Context/store/AuthGlobal'
import { logoutUser } from '../Context/actions/Auth.actions'

let { height } = Dimensions.get("window")

const listButton = [
  {
    id: 3,
    name: "********",
    iconName: "lock-closed-outline",
    endButton: "edit",
    sizeIcon: 24
  },
  {
    id: 4,
    name: "Hanoi, VietNam",
    iconName: "home-outline",
    endButton: "edit",
    sizeIcon: 24
  },
  {
    id: 5,
    name: "Support",
    iconName: "bulb-outline",
    endButton: "arrow-right",
    sizeIcon: 24
  },
]
export default function Profile(props) {
  const context = useContext(AuthGlobal)
  const [userProfile, setUserProfile] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    if (
      context.stateUser.isAuthenticated == false ||
      context.stateUser.isAuthenticated == null
    ) {
      props.navigation.navigate("Login")
    }
    else {
      // console.log(context.stateUser.user)
      AsyncStorage.getItem('jwt')
        .then((res) => {
          axios
            .get(`${baseUrl}customers/${context.stateUser.user.customerId}`, {
              headers: {
                Authorization: `Bearer ${res}`
              }
            })
            .then((user) => {
              // console.log(user.data)
              setUserProfile(user.data)
              setLoading(false)
            })
            .catch((error) => console.log(error))
        })
    }
    return setUserProfile()
  }, [context.stateUser.isAuthenticated])
  return (
    <>
      {
        loading ? <Loading /> :
          <ScrollView>
            <View style={styles.profileContainer}>
              <Text style={styles.titleProfile}>Profile</Text>
              <View style={styles.profileCard}>
                <View style={styles.borderAvatar}>
                  <Image
                    style={styles.avatar}
                    source={require("../assets/images/profile.jpg")}
                  />
                </View>
                <View style={{ justifyContent: 'center', padding: 20 }}>
                  <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>
                    {userProfile ? userProfile.name : "Error"}
                  </Text>
                </View>
              </View>
              <View style={{ height: height }}>
                {
                  listButton.map((button) => {
                    return (
                      <TouchableOpacity key={button.id}
                        style={styles.cardItem}>
                        <View style={{
                          flexDirection: 'row', alignItems: 'center',
                        }}>
                          <Ionicons name={button.iconName} size={button.sizeIcon} color="black" />
                          <Text style={{ fontSize: 17, marginLeft: 10, color: COLOR.mainColor }}>{button.name}</Text>
                        </View>
                        <View>
                          <Feather name={button.endButton} size={button.sizeIcon} color="black" />
                        </View>
                      </TouchableOpacity>
                    )
                  })
                }
                <TouchableOpacity
                  style={styles.cardItem}>
                  <View style={{
                    flexDirection: 'row', alignItems: 'center',
                  }}>
                    <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />
                    <Text style={{ fontSize: 17, marginLeft: 10, color: COLOR.mainColor }}>
                      {userProfile ? userProfile.phone : "Error"}</Text>
                  </View>
                  <View>
                    <Feather name="edit" size={24} color="black" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cardItem}>
                  <View style={{
                    flexDirection: 'row', alignItems: 'center',
                  }}>
                    <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />
                    <Text style={{ fontSize: 17, marginLeft: 10, color: COLOR.mainColor }}>
                      {userProfile ? userProfile.email : "Error"}</Text>
                  </View>
                  <View>
                    <Feather name="edit" size={24} color="black" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cardItem}
                  onPress={() => {
                    AsyncStorage.removeItem("jwt")
                    logoutUser(context.dispatch)
                    props.navigation.navigate("Login")
                  }}
                >
                  <View style={{
                    flexDirection: 'row', alignItems: 'center',
                  }}>
                    <Ionicons name="settings-outline" size={24} color="black" />
                    <Text style={{ fontSize: 17, marginLeft: 10, color: COLOR.mainColor }}>
                      Logout</Text>
                  </View>
                  <View>
                    <Feather name="edit" size={24} color="black" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
      }

    </>
  )
}


const styles = StyleSheet.create({
  cardItem: {
    width: 360,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 17,
    borderWidth: 0.3,
    borderColor: "#ccc",
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,

    //box shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  profileCard: {
    top: -35,
    alignItems: "center",
    marginBottom: -30
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  profileContainer: {
    backgroundColor: COLOR.mainColor,
    // height,
    alignItems: "center",
  },
  titleProfile: {
    color: '#fff',
    fontSize: 20,
    marginTop: 40,
    fontWeight: '600',
    marginBottom: 50
  },
  borderAvatar: {
    borderColor: 'orange',
    borderWidth: 3,
    borderRadius: 60,
    height: 100,
    width: 100
  }
})