import React from 'react'
import {Image, Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {COLOR} from "../../../assets/font/color";

const CategoryCardFilter = (props) => {
    const {name, imgUrl} = props;
    return (
        <TouchableOpacity
         key={1}
         style={styles.ctgImage}>
            <Image style={styles.category}
                   source={{uri: imgUrl}}
            />
            <Text style={styles.title}>{name}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCardFilter;

const styles = StyleSheet.create({
    title: {
        position: 'absolute',
        bottom: 35,
        color: COLOR.mainColor,
        fontWeight: 'bold',
    },
    category: {
        height: 50,
        width: 50,
        resizeMode: 'cover',
        // borderRadius: '40'
    },
    ctgImage: {
        borderColor: '#fff',
        height: 120,
        width: 130,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        textAlign: 'center',
        position: 'relative',
    }

})
