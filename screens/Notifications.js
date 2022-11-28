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

import {Entypo, Ionicons} from '@expo/vector-icons';

const Notification = require('../assets/data/notification.json');

let {height} = Dimensions.get("window")


const Notifications = () => {
    const renderNotification = ({item}) => {
        const {iconName, notTitle, description, sizeIcon} = item;
        return (
            <TouchableOpacity>
                <View style={styles.cardNot}>
                    <View style={[styles.iconNotContainer, {borderColor: item.color, backgroundColor: item.color}]} >
                        <Ionicons style={styles.imageIcon} name={iconName} size={sizeIcon} color="black"/>
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
                            backgroundColor: COLOR.mainColor,
                            height,
                        }}
                        data={Notification}
                        renderItem={renderNotification}
                        keyExtractor={item => `${item._id.$oid}`}
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
        marginTop: 40,
        fontWeight: '600',
        marginBottom: 30
    },
    cardNot: {
        borderWidth: 1,
        borderColor: '#fff',
        height: 100,
        width: 360,
        paddingVertical: 20,
        paddingHorizontal: 3,
        textAlign: "center",
        marginVertical: 10,
        marginHorizontal: 10,
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
        borderRadius: 60,
        height: 40,
        width: 40,
        alignItems: "center",
        paddingTop: 5,
        paddingLeft: 8,
        marginVertical: 7
    },
    iconNot: {
        marginVertical: 5
    },
    itemNote: {
        marginHorizontal: 15
    },
    imageIcon: {
        backgroundColor: 'fff',
        height: 32,
        width: 32,
        resizeMode: "cover",
        borderRadius: 50,
        color: '#fff',
    }
})