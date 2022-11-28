import React from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions, ScrollView
} from "react-native";
import { Button } from 'react-native-paper';
import { orange } from "@mui/material/colors";

// redux 
import { useDispatch } from 'react-redux'
import { cartSlice } from '../../redux/slices/cartSlice'

let { width } = Dimensions.get("window");

const ProductCard = (props) => {
    const { image, name, price, countInStock } = props;
    const items = props
    const dispatch = useDispatch()
    const handleClickAdd = (item) => {
        dispatch(cartSlice.actions.addToCard(item))
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image}
                    resizeMode={"cover"}
                    source={{ uri: image ? image : 'https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage_icon-1.png' }}
                />
                <View style={styles.card} />
                <View style={styles.titleCard}>
                    <Text style={styles.title}>
                        {name.length > 15 ? name.substring(0, 15 - 3)
                            + '...' : name
                        }
                    </Text>
                    <View style={styles.cardItem}>
                        <Text style={styles.price}>$ {price}</Text>
                        {countInStock > 0 ? (
                            <View style={{ marginBottom: 60 }}>
                                <Button buttonColor='orange' mode="contained" onPress={() => handleClickAdd(items)} > Add</Button>
                            </View>
                        ) : <Text style={{ marginTop: 20 }}>Currently Unavailable</Text>}
                    </View>
                </View>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        marginBottom: -55,
        marginLeft: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        height: '100%'
        // elevation: 8,
    },
    titleCard: {
        marginTop: 75,
        textAlign: "center",
        alignItems: "center"
    },
    cardItem: {
        flexDirection: 'row',
        marginTop: 12
    },
    image: {
        width: 180,
        height: 200,
        // backgroundColor: 'transparent',
        // position: 'absolute',
        top: 5,
        marginBottom: -150,
        borderRadius: 20
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        width: width / 2 - 20 - 10,
        backgroundColor: 'transparent'
    },
    title: {
        fontWeight: '800',
        fontSize: 18,
        textAlign: "center",
        color: '#fff',
    },
    price: {
        fontSize: 15,
        marginTop: 10,
        color: '#ccc',
        marginRight: 10,
        fontWeight: '300'
    }
})

export default ProductCard;
