import { StyleSheet } from 'react-native';
import { COLOR } from "../assets/font/color";
const StylesRadiobutton = StyleSheet.create({
  option: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    width: 350,
    paddingVertical: 20,
    fontWeight: '600',
  },
  unselected: {
    backgroundColor: '#ccc',
    margin: 5,
    borderRadius: 20
  },
  selected: {
    backgroundColor: 'orange',
    margin: 6,
    padding: 10,
    borderRadius: 20,
  },
});
export default StylesRadiobutton;