import { Text, View, FlatList, Image, Dimensions, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

import { COLOR } from "../../assets/font/color";

let { width, height } = Dimensions.get("window")


const SearchedProduct = (props) => {
    const { productsFiltered } = props;
    const handleClick = ({ item }) => {
        props.navigation.navigate("Product Detail", { item: item })
    }
    if (productsFiltered.length > 0) {
        const searchList = ({ item }) => (
            <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row', marginBottom: 10, borderRadius: 10 }}
                onPress={() => handleClick({ item })}
            >
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        borderColor: COLOR.mainColor,
                        borderWidth: 2,
                        borderRadius: 10,
                        marginLeft: 10,
                        borderRadius: 20,
                        // marginBottom: -30,
                        backgroundColor: '#ccc'
                    }}
                    source={{
                        uri: item.image ?
                            item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                    }}
                />
                <View style={{ paddingHorizontal: 20, justifyContent: 'center' }}>
                    <Text style={{
                        color: 'orange',
                        fontSize: 18,
                        fontWeight: '800',
                    }}>{item.name}</Text>
                    <Text style={{
                        color: '#fff',
                        fontSize: 15,
                        fontWeight: '200',
                    }}>{item.description.length > 50 ? item.description.substring(0, 30) + "..." : item.description}</Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <SafeAreaView>
                <FlatList
                    style={{
                        marginTop: 10,
                        backgroundColor: COLOR.mainColor,
                        height: height
                    }}
                    data={productsFiltered}
                    renderItem={searchList}
                    key={productsFiltered => productsFiltered._id}
                />
            </SafeAreaView>
        )
    } else {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 700,
                backgroundColor: '#fff',
            }}>
                <Image style={{
                    width: 200,
                    height: 120,
                    alignItems: 'center',
                    marginTop: -200,
                }}
                    source={{ uri: 'https://img.freepik.com/premium-vector/professional-detective-with-mustaches-magnifier-follows-footprints_87689-1154.jpg' }}
                />
                <Text style={{
                    alignSelf: 'center',
                    marginTop: 40,
                }}>
                    No Products Match The Selected Criteria !
                </Text>
            </View>
        )
    }

}


export default SearchedProduct;