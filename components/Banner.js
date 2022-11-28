import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView } from "react-native";
import Swiper from "react-native-swiper/src";
import {COLOR} from "../assets/font/color";

let { width } = Dimensions.get("window");

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        setBannerData([
            "https://plus.unsplash.com/premium_photo-1665392923178-426307c4c63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjUzfHxmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzU0fHxmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        ]);

        return () => {
            setBannerData([]);
        };
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.swiper}>
                    <Swiper
                        style={{ height: width / 2 }}
                        showButtons={false}
                        autoplay={true}
                        autoplayTimeout={2}
                    >
                        {bannerData.map((item) => {
                            return (
                                <Image
                                    key={item}
                                    style={styles.imageBanner}
                                    resizeMode="contain"
                                    source={{ uri: item }}
                                />
                            );
                        })}
                    </Swiper>
                    <View style={{ height: 20 }}></View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.mainColor,
        paddingHorizontal: 10
    },
    swiper: {
        width: width,
        alignItems: "center",
        marginTop: 10,
    },
    imageBanner: {
        height: width / 1.3,
        width: '95%',
        opacity: 0.6,
        // marginHorizontal: 15
        // marginHorizontal: 20,
    },
});

export default Banner;
