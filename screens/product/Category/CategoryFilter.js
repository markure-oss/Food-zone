import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from "react-native";
import CategoryCardFilter from "./CategoryCardFilter";
const categoryProducts = require('../../../assets/data/categories.json');
import CategoriesList from './CategoriesList';

import { COLOR } from "../../../assets/font/color";

const CategoryFilter = (props) => {
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
                    onPress={() => {
                        props.categoryFilter('all'), props.setActive(-1)
                    }}
                >
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
                </TouchableOpacity>

                {props.categories.map((item) => (
                    <TouchableOpacity
                        key={item._id.$oid}
                        onPress={() => {
                            props.categoryFilter(item._id.$oid),
                                props.setActive(props.categories.indexOf(item))
                        }}
                    >
                        <View style={[
                            styles.allCtg,
                            props.active == props.categories.indexOf(item) ? styles.Active : styles.inActive
                        ]}>
                            <Image style={styles.categoryItem} source={{ uri: item.imgUrl }} />
                            <Text style={styles.title}>{item.name}</Text>
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
        // position: 'relative',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // textAlign: 'center',
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
        backgroundColor: '#d2763b'
    },
    inActive: {
        backgroundColor: '#7f8085'
    },
    categoryRes: {
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