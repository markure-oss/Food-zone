import {Text, View, FlatList, Image, Dimensions, ScrollView, SafeAreaView, StyleSheet} from "react-native";


let { width } = Dimensions.get("window")


const SearchedProduct = (props) => {
    const { productsFiltered } = props; 



    const searchList = ({item}) => (
        <View>
            <View style={{
                          marginTop: 30, 
                          borderBottomColor: '#ccc', 
                          borderBottomWidth: 1 
                          }}>
                <View>
                    <Image
                        style={{ width: 60,
                                 height: 60,
                                 borderColor: 'white', 
                                 borderWidth: 2, 
                                 borderRadius: 100, 
                                 marginLeft: 10, 
                                 marginBottom: -30
                                }}
                        source={{uri: item.image ?
                                item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                        }}
                    />
                </View>
                <View>
                    <Text style={{marginLeft: 100}}>{item.name}</Text>
                    <Text style={{marginLeft: 100}}>{item.description}</Text>
                </View>
            </View>
        </View>
    )

    return (
        <SafeAreaView>
        <FlatList
            style={{marginTop: 30}}
            data={productsFiltered}
            renderItem={searchList}
            key={productsFiltered => productsFiltered._id.$oid}
        />
        </SafeAreaView>
    )

}


export default SearchedProduct;