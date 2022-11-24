<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from "react-native";
import CategoryCardFilter from "./CategoryCardFilter";
const categoryProducts = require('../../../assets/data/categories.json');
import CategoriesList from './CategoriesList';
=======
import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image} from "react-native";
const categoryProducts = require('../../../assets/data/categories.json');
>>>>>>> e140cc865412a824b0c7d2a10dcbfce90eccd6ee

import { COLOR } from "../../../assets/font/color";

const CategoryFilter = (props) => {
<<<<<<< HEAD
=======

>>>>>>> e140cc865412a824b0c7d2a10dcbfce90eccd6ee
    return (

        <ScrollView
            bounces={true}
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 2,
                paddingTop: 0
            }}
            showsHorizontalScrollIndicator={false}
            style={{ backgroundColor: COLOR.mainColor }}
        >
            <View style={styles.categoryRes}>
                <TouchableOpacity
<<<<<<< HEAD
=======
                    key={1}
>>>>>>> e140cc865412a824b0c7d2a10dcbfce90eccd6ee
                    onPress={() => {
                        props.categoryFilter('all'), props.setActive(-1)
                    }}
                >
<<<<<<< HEAD
                    <View style={[
                        styles.allCtg,
                        props.active == -1 ? styles.Active : styles.inActive
                    ]}>
                        <Image
                            style={styles.categoryItem}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/128/706/706997.png'
                            }} />
                        <Text style={styles.title}>Categories</Text>
                    </View>
=======
                   <View style={[
                       styles.allCtg,
                       props.active == -1 ? styles.Active : styles.inActive
                   ]}>
                       <Image
                           style={styles.categoryItem}
                           source={{
                           uri: 'https://cdn-icons-png.flaticon.com/128/706/706997.png'
                       }} />
                       <Text style={styles.title}>Categories</Text>
                   </View>
>>>>>>> e140cc865412a824b0c7d2a10dcbfce90eccd6ee
                </TouchableOpacity>

                {props.categories.map((item) => (
                    <TouchableOpacity
<<<<<<< HEAD
                        key={item._id.$oid}
                        onPress={() => {
                            props.categoryFilter(item._id.$oid),
                                props.setActive(props.categories.indexOf(item))
=======
                        key={item._id}
                        onPress={() => {
                            props.categoryFilter(item._id),
                            props.setActive(props.categories.indexOf(item))
>>>>>>> e140cc865412a824b0c7d2a10dcbfce90eccd6ee
                        }}
                    >
                        <View style={[
                            styles.allCtg,
                            props.active == props.categories.indexOf(item) ? styles.Active : styles.inActive
                        ]}>
<<<<<<< HEAD
                            <Image style={styles.categoryItem} source={{ uri: item.imgUrl }} />
                            <Text style={styles.title}>{item.name}</Text>
=======
                            <Image style={styles.categoryItem} source={{uri: item.imgUrl}} />
                           <Text style={styles.title}>{item.name}</Text>
>>>>>>> e140cc865412a824b0c7d2a10dcbfce90eccd6ee
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

export default CategoryFilter;

const styles = StyleSheet.create({
    allCtg: {
<<<<<<< HEAD
        // position: 'relative',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // textAlign: 'center',
=======
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
>>>>>>> e140cc865412a824b0c7d2a10dcbfce90eccd6ee
        margin: 5,
        height: 80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        borderRadius: 10
    },
    Active: {
<<<<<<< HEAD
        backgroundColor: '#d2763b'
    },
    inActive: {
        backgroundColor: '#7f8085'
    },
    categoryRes: {
=======
        backgroundColor: 'rgba(234,125,62,0.95)'
    },
    inActive: {
        backgroundColor: "#b4b0b0"
    },
    categoryRes:{
>>>>>>> e140cc865412a824b0c7d2a10dcbfce90eccd6ee
        height: 100,
        flexDirection: "row"
    },
    title: {
        bottom: -3,
        color: '#333',
        fontWeight: 'bold',
    },
    categoryItem: {
        height: 50,
        width: 50,
        resizeMode: 'cover',
        marginTop: 5
    },
})