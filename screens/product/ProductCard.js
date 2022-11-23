import React from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    Button,
    Dimensions
} from "react-native";

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
        <View style={styles.container}>
            <Image style={styles.image}
                resizeMode={"contain"}
                source={{ uri: image ? image : 'https://media.istockphoto.com/id/173240148/photo/one-green-pea-on-plate-table-setting-with-clipping-path.jpg?b=1&s=170667a&w=0&k=20&c=lnUXrKFxY4V6GdYmUm8XcbJJ66vI87WjB79CVKuXjvE=' }}
            />
            <View style={styles.card} />
            <Text style={styles.title}>
                {name.length > 15 ? name.substring(0, 15 - 3)
                    + '...' : name
                }
            </Text>
            <Text style={styles.price}>${price}</Text>

            {countInStock > 0 ? (
                <View style={{ marginBottom: 60 }}>
                    <Button
                        title={'Add'}
                        color={'green'}
                        onPress={() => handleClickAdd(items)}
                    />
                </View>
            ) : <Text style={{ marginTop: 20 }}>Currently Unavailable</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 10,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        width: width / 2 - 20 - 10,
        backgroundColor: 'transparent'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: "center"
    },
    price: {
        fontSize: 20,
        marginTop: 10,
        color: 'orange'
    }
})

export default ProductCard;
