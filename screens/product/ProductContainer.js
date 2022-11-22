import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    StatusBar,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView,
    Dimensions
} from "react-native";

import ProductList from './ProductList';
import searchedProduct from "./SearchedProduct";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

import { WINDOW_HEIGHT } from "../../shared/Dimensions";
import SearchedProduct from "./SearchedProduct";
import Banner from "../../components/Banner";

import baseUrl from "../../common/baseUrl";
import axios from "axios";

const data = require('../../assets/data/products.json');
const categoriesData = require('../../assets/data/categories.json');


const ProductContainer = () => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState([]);
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        setProducts(data);
        setProductFiltered(data);
        setFocus(false);
        setCategories(categoriesData);
        setActive(-1);
        setInitialState(data);

        return (() => {
            setProducts([])
            setProductFiltered([])
            setFocus()
            setCategories([])
            setActive([])
            setInitialState([])
        })
    }, [])


    const searchProduct = (text) => {
        setProductFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }
    const openList = () => {
        setFocus(true);
    }
    const onBlur = () => {
        setFocus(false);
    }




    return (
        <View>
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                <SafeAreaView>
                    <View style={styles.upperHeaderPlaceholder} />
                </SafeAreaView>
                <SafeAreaView style={styles.header}>
                    <View style={styles.upperHeader}>
                        <View style={styles.searchContainer}>
                            <Image
                                source={require('../../assets/images/search.png')}
                                style={styles.searchIcon}
                            />
                            <TextInput
                                placeholder="Search product"
                                placeholderTextColor="rgba(255, 255, 255, 0.8)"
                                style={styles.searchInput}
                                onFocus={openList}
                                onChangeText={(text) => searchProduct(text)}
                            />
                            {focus == true ? (
                                <AntDesign name="closecircle" size={16} color="white" onPress={onBlur} style={styles.closeIcon} />
                            ) : null}
                        </View>
                        <Foundation name="shopping-cart" style={styles.cartIcon} size={24} color="white" />
                        <Image
                            source={require('../../assets/images/avatar.png')}
                            style={styles.avatarIcon}
                        />
                    </View>
                    <View style={styles.lowerHeader} />
                </SafeAreaView>
                <ScrollView>
                    <View style={styles.paddingForHeader} />
                    <View style={styles.scrollViewContent} />
                </ScrollView>
            </View>
            {focus == true ? (
                <SearchedProduct
                    productsFiltered={productsFiltered}
                />
            ) : (
                <View>
                    <View>
                        <Banner />
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <FlatList
                            numColumns={2}
                            // horizontal
                            data={products}
                            renderItem={({ item }) => <ProductList
                                key={item.id}
                                item={item}
                            />}
                            keyExtractor={item => item.name}
                        />
                    </View>
                </View>
            )}
        </View>
    )
}



export default ProductContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 40,
        marginBottom: 150,
    },
    upperHeaderPlaceholder: {
        height: 40
    },
    header: {
        position: 'absolute',
        width: '100%',
        backgroundColor: '#1e2027',
        // marginBottom: 30
    },
    scrollViewContent: {
        height: WINDOW_HEIGHT * 2,
        backgroundColor: 'white'
    },
    paddingForHeader: {
        height: 96,
    },
    upperHeader: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    lowerHeader: {
        height: 96
    },
    searchIcon: {
        width: 16,
        height: 16,
        marginLeft: 8
    },
    cartIcon: {
        width: 18,
        height: 20,
        marginHorizontal: 32,
        color: 'white'
    },
    avatarIcon: {
        width: 28,
        height: 28
    },
    searchContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    searchInput: {
        position: 'absolute',
        width: '100%',
        backgroundColor: "rgba(225, 225, 225, 0.3)",
        color: 'white',
        borderRadius: 4,
        paddingVertical: 4,
        paddingLeft: 32
    },
    closeIcon: {
        marginLeft: 220,
        marginTop: -12
    }
});