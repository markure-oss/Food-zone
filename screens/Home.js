import React from "react";
import {ScrollView, StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput} from "react-native";
import { Ionicons } from "@expo/vector-icons";


const Home = () => {
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={{padding: 10 * 2}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Image style={styles.image} source={require("../assets/images/profile.jpg")} />
                            <Text style={{fontSize: 20, fontWeight: "800", color: "#fff"}}>Hung Pham</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <Ionicons
                                    name="notifications-outline"
                                    size={10 * 3.5}
                                    color="#fff"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons
                                    name="menu"
                                    size={10 * 3.5}
                                    color="#fff"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        backgroundColor: "rgb(240,240,240)",
                        marginVertical: 10 * 3,
                        padding: 10,
                        borderRadius: 10
                    }}>
                        <Ionicons name="search" color="rgb(120,120,120)" size={10 * 2.7}/>
                        <TextInput placeholder="want to..."
                                   placeholderTextColor="rgb(120,120,120)"
                                   style={{
                                       color: "rgb(120,120,120)",
                                       fontSize: 10 * 2,
                                       marginLeft: 10
                                   }}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({
    image: {
        width: 10 * 4.5,
        height: 10 * 4.5,
        borderRadius: 10 * 3.5,
        marginRight: 10
    }
});
