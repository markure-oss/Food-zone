import React from 'react';
import { Text, View, StyleSheet, Dimensions, SafeAreaView, StatusBar } from "react-native";
import { COLOR } from "../assets/font/color";

const { height } = Dimensions.get("window")



const MessageScreen = () => {
    return (
        <>
            <StatusBar barStyle='light-content' />
            <View style={styles.containerMessage}>
                <Text style={styles.titleMessage}>
                    Message Screen
                </Text>
            </View>
        </>
    );
}

export default MessageScreen;

const styles = StyleSheet.create({
    titleMessage: {
        color: '#fff',
        fontWeight: '300',
        fontSize: 30,
        marginTop: 70
    },
    containerMessage: {
        textAlign: "center",
        alignItems: "center",
        backgroundColor: COLOR.mainColor,
        height,
    }
})