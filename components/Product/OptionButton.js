import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

// icon
import { FontAwesome, AntDesign, Ionicons, Octicons } from '@expo/vector-icons';

export default function OptionButton() {
  return (
    <View style={styles.option}>
      <TouchableOpacity style={styles.optionButton}>
        <AntDesign name="wifi" size={30} color="#ccc" style={{ opacity: 0.5 }} />
        <Text style={styles.label}>Free Wifi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <FontAwesome name="photo" size={30} color="#ccc" style={{ opacity: 0.5 }} />
        <Text style={styles.label}>Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Octicons name="report" size={30} color="#ccc" style={{ opacity: 0.5 }} />
        <Text style={styles.label}>Report</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Ionicons name="bookmarks-outline" size={30} color="#ccc" style={{ opacity: 0.5 }} />
        <Text style={styles.label}>Bookmark</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <AntDesign name="sharealt" size={30} color="#ccc" style={{ opacity: 0.5 }} />
        <Text style={styles.label}>Free Wifi</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  option: {
    flex: 1,
    // width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  optionButton: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  label: {
    fontSize: 10,
    color: '#ccc',
    marginTop: 5
  }
})