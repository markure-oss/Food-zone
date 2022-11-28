import React from 'react';
import { Text, View, StyleSheet, Dimensions, SafeAreaView, StatusBar, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { COLOR } from "../assets/font/color";

let { height } = Dimensions.get("window")

const listMessages = [
    {
        _id: 1,
        nameUser: "Hung Pham",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        time: "4 mins ago",
        shotChat: "I want order dish"
    },
    {
        _id: 2,
        nameUser: "Tuan Anh",
        avatar: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        time: "2 hours ago",
        shotChat: "I want order dish"
    },
    {
        _id: 3,
        nameUser: "Hoang Hai",
        avatar: "https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?b=1&s=170667a&w=0&k=20&c=XPuGhP9YyCWquTGT-tUFk6TwI-HZfOr1jNkehKQ17g0=",
        time: "3 days ogo",
        shotChat: "I want order dish"
    },
    {
        _id: 4,
        nameUser: "Nguyen Anh",
        avatar: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHByb2ZpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        time: "1 hours ago",
        shotChat: "I want order dish"
    },
    {
        _id: 5,
        nameUser: "Ngoc Ha",
        avatar: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHByb2ZpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        time: "1 day ago",
        shotChat: "I want order dish"
    },
    {
        _id: 6,
        nameUser: "Cam Nga",
        avatar: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHByb2ZpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        time: "2 months ago",
        shotChat: "I want order dish"
    }
]

const MessageScreen = () => {

    return (
        <>
            <StatusBar barStyle='light-content' />
            <View style={styles.containerMessages}>
                <Text style={styles.titleMessage}>
                    Message
                </Text>
                <ScrollView style={styles.messagesCard}>
                    <View style={{ height: height }}>
                        {
                            listMessages.map((messages) => {
                                return (
                                    <TouchableOpacity style={styles.messagesCard}>
                                        <View style={styles.ContentCard}>
                                            <View style={styles.imageCard}>
                                                <Image style={styles.avatarImage} source={{ uri: messages.avatar }} />
                                            </View>
                                            <Text style={styles.timeChat}>{messages.time}</Text>
                                        </View>
                                        <View style={styles.textSection}>
                                            <Text style={styles.nameItem}>{messages.nameUser}</Text>
                                            <Text style={styles.messagesItem}>{messages.shotChat}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

export default MessageScreen;

const styles = StyleSheet.create({
    messagesCard: {
        position: "relative",
        marginTop: 30,
        borderWidth: 1,
        borderColor: COLOR.mainColor,
        width: '100%',
        padding: 10,
        backgroundColor: COLOR.mainColor,
        borderRadius: 15,
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
    ContentCard: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleMessage: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 20,
        marginTop: 40,
        marginBottom: 10

    },
    containerMessages: {
        textAlign: "center",
        alignItems: "center",
        backgroundColor: COLOR.mainColor,
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        borderRadius: 30
    },
    timeChat: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '300'
    },
    textSection: {
        position: "absolute",
        marginTop: 20,
        marginLeft: 80,
    },
    nameItem: {
        color: '#fff',
        marginBottom: 10,
        marginTop: -8,
        fontSize: 16,
        fontWeight: '600'
    },
    messagesItem: {
        color: '#fff',
    },
    imageCard: {
        height: 60,
        width: 60,
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 30,
    }
})
