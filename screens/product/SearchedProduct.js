import { Text, View, FlatList, Image, Dimensions, ScrollView, SafeAreaView, StyleSheet } from "react-native";

import {COLOR} from "../../assets/font/color";

let { width, height } = Dimensions.get("window")


const SearchedProduct = (props) => {
    const { productsFiltered } = props;

    if (productsFiltered.length > 0) {
        const searchList = ({ item }) => (
            <View>
                <View style={{
                    marginTop: 20,
                    height: 80
                              }}
                >
                    <View style={{
                        marginBottom: -28,
                    }}>
                        <Image
                            style={{ width: 70,
                                     height: 70,
                                     borderColor: COLOR.mainColor,
                                     borderWidth: 2, 
                                     borderRadius: 10,
                                     marginLeft: 10, 
                                     marginBottom: -30
                                    }}
                            source={{uri: item.image ?
                                    item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                            }}
                        />
                    </View>
                    <View>
                        <Text style={{
                            marginLeft: 100,
                            color: 'orange',
                            fontSize: 18,
                            fontWeight: '800',
                            marginBottom: 5
                        }}>{item.name}</Text>
                        <Text style={{
                            marginLeft: 100,
                            color: '#fff',
                            fontSize: 15,
                            fontWeight: '200'
                        }}>{item.description}</Text>
                    </View>
                </View>
            </View>
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
                key={productsFiltered => productsFiltered._id.$oid}
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
                    marginTop: -200
                }} 
                source={{ uri: 'https://img.freepik.com/premium-vector/professional-detective-with-mustaches-magnifier-follows-footprints_87689-1154.jpg'}}
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