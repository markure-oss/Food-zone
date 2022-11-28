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
import React from 'react'
import Footer, {currentPage} from "../components/Footer"
import {Ionicons, Feather} from '@expo/vector-icons'
import {COLOR} from '../assets/font/color'

let {height} = Dimensions.get("window")

const listButton = [
    {
        id: 1,
        name: "Hung Pham",
        iconName: "ios-person-outline",
        endButton: "edit",
        sizeIcon: 24
    },
    {
        id: 2,
        name: "ptuanhungg@gmail.com",
        iconName: "chatbox-ellipses-outline",
        endButton: "edit",
        sizeIcon: 24
    },
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
  {
    id: 6,
    name: "Log Out",
    iconName: "settings-outline",
      endButton: "arrow-right",
    sizeIcon: 24
  }
]
export default function Profile() {
    return (
        <>
          <StatusBar barStyle='dark-content' />
          <View style={styles.profileContainer}>
            <Text style={styles.titleProfile}>Profile</Text>
            <View style={styles.profileCard}>
                <View style={styles.borderAvatar}>
                    <Image
                        style={styles.avatar}
                        source={require("../assets/images/profile.jpg")}
                    />
                </View>
              <View style={{justifyContent: 'center', padding: 20}}>
                <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Hung Pham</Text>
              </View>
            </View>
              <View style={{height: height}}>
                {
                  listButton.map((button) => {
                    return (
                        <TouchableOpacity key={button.id}
                                          style={styles.cardItem}>
                          <View style={{
                            flexDirection: 'row', alignItems: 'center',
                          }}>
                            <Ionicons name={button.iconName} size={button.sizeIcon} color="black"/>
                            <Text style={{fontSize: 17, marginLeft: 10, color: COLOR.mainColor}}>{button.name}</Text>
                          </View>
                          <View>
                            <Feather name={button.endButton} size={button.sizeIcon} color="black" />
                          </View>
                        </TouchableOpacity>
                    )
                  })
                }
              </View>
          </View>
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