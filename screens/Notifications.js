import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    StatusBar,
    FlatList,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import {COLOR} from "../assets/font/color";

import {Entypo} from '@expo/vector-icons';

const Notification = require('../assets/data/notification.json');

let {height} = Dimensions.get("window")

const Notifications = () => {
    const renderNotification = ({item}) => {
        const {icon, notTitle, description} = item;
        return (
            <TouchableOpacity>
                <View style={styles.cardNot}>
                    <View style={styles.iconNotContainer} >
                        <Image style={styles.imageIcon} source={require('../assets/images/icons8-error-48.png')} />
                    </View>
                    <View style={styles.itemNote}>
                        <Text style={{color: COLOR.mainColor, fontSize: 18, fontWeight: '700', marginBottom: 5}}>{notTitle}</Text>
                        <Text style={{color: 'black', fontSize: 15, fontWeight: '300'}}>{description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <>
            <StatusBar barStyle='light-content'/>
            <View style={styles.notificationContainer}>
                <Text style={styles.titleNot}>Notification</Text>
                <ScrollView>
                    <FlatList
                        style={{
                            backgroundColor: '#fff',
                            height,
                        }}
                        data={Notification}
                        renderItem={renderNotification}
                        keyExtractor={item => `${item._id.$oid}`}
                        // horizontal={false}
                        // showsHorizontalScrollIndicator={false}
                    />
                </ScrollView>
            </View>
        </>
    )
}


export default Notifications;


const styles = StyleSheet.create({
    notificationContainer: {
        backgroundColor: COLOR.mainColor,
        height,
        alignItems: "center"
    },
    titleNot: {
        color: '#fff',
        fontSize: 20,
        marginTop: 60,
        fontWeight: '800',
        marginBottom: 50
    },
    cardNot: {
        borderWidth: 1,
        borderColor: '#fff',
        height: 100,
        width: 350,
        paddingVertical: 20,
        paddingHorizontal: 3,
        textAlign: "center",
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        backgroundColor: '#fff',
        //box-shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,

        borderRadius: 10
    },
    iconNotContainer: {
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 60,
        height: 40,
        width: 40,
        backgroundColor: 'orange',
        alignItems: "center"
    },
    iconNot: {
        marginVertical: 5
    },
    itemNote: {
        // marginLeft: 20,
        marginHorizontal: 15
    },
    imageIcon: {
        backgroundColor: 'orange',
        height: 35,
        width: 35,
        resizeMode: "cover",
        borderRadius: 50
    }
})