import React from 'react';
import { TouchableOpacity, View, Dimensions, StyleSheet, ScrollView} from "react-native";
import CategoryCardFilter from "./CategoryCardFilter";

import { COLOR } from "../../../assets/font/color";


let {width} = Dimensions.get("window");


const CategoriesList = (props) => {
    const {item} = props;

    return (
      <ScrollView>
            <View style={styles.container}>
                <CategoryCardFilter {...item}/>
            </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
      height: 90,
      backgroundColor: '#fff',
      paddingTop: 5
  }
})

export default CategoriesList;