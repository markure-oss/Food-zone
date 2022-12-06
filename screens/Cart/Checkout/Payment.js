import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Button, TouchableOpacity } from "react-native";
import { COLOR } from "../../../assets/font/color";


//components
import StylesRadiobutton from "../../../components/Styles";
import { LinearGradient } from "expo-linear-gradient";

const methods = [
  { name: 'Cash on Delivery', value: 1 },
  { name: 'Bank Transfer', value: 2 },
  { name: 'Card Payment', value: 3 }
]

const Payment = (props) => {
  const order = props.route.params;
  const [selected, setSelected] = useState();
  const [card, setCard] = useState();
  return (
    <View style={{ alignItems: "center", marginTop: 1, backgroundColor: COLOR.mainColor, flex: 1 }}>
      <View style={styles.headerPayment}>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Choose your payment method</Text>
      </View>
      {methods.map((item, index) => {
        return (
          <Pressable
            key={index}
            style={ //Line 5
              selected == item.value ? StylesRadiobutton.selected : StylesRadiobutton.unselected
            }
            onPress={() => setSelected(item.value)}
          >
            <Text style={StylesRadiobutton.option}> {item.name}</Text>
          </Pressable>
        );
      })}

      <TouchableOpacity style={{ fontSize: 15, color: 'white' }}
        onPress={() => props.navigation.navigate("Confirm", { order })} >
        <LinearGradient colors={['rgba(232, 192, 61, 1)', 'rgba(190, 100, 109, 1)']}
          style={{ padding: 10, paddingHorizontal: 25, borderRadius: 8, marginTop: 20 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text style={{ fontSize: 15, color: 'white', padding: 5, paddingHorizontal: 20 }}>Confirm</Text>
        </LinearGradient>
      </TouchableOpacity>

    </View>
  );

}

const styles = StyleSheet.create({
  headerPayment: {
    borderColor: COLOR.mainColor,
    borderWidth: 1,
    height: 60,
    width: '100%',
    backgroundColor: COLOR.mainColor,
    alignItems: "center",
    paddingVertical: 14,
    marginBottom: 50
  }
})

export default Payment;