import React from 'react';
import { TextInput, StyleSheet } from 'react-native'
import { COLOR } from '../../assets/font/color'
const Input = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      value={props.value}
      autoCorrect={props.autoCorrect}
      onChangeText={props.onChangeText}
      onFocus={props.onFocus}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
      placeholderTextColor="#ccc"
    >
    </TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 60,
    backgroundColor: COLOR.mainColor,
    margin: 10,
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: 'orange',
    padding: 20,
    color: '#ccc'
  },
});

export default Input;