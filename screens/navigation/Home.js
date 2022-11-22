import React from "react";
import {View, StyleSheet} from "react-native";

//shared
import ProductContainer from "../product/ProductContainer";

const Home = () => {
    return (
            <View style={styles.container}>
                <ProductContainer />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // width: 485,
    }
})
export default Home;