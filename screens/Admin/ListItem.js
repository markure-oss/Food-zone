import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, Modal, LogBox } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../../assets/font/color'
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'


// LogBox.ignoreWarnings([
//   'Non-serializable values were found in the navigation state',
// ]);
export default function ListItem(props) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={[styles.container]}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.createdView}>
          <View style={styles.modalView}>
            <View style={{ width: '100%' }}>
              <View style={styles.titleModal}>
                <Text style={{ fontSize: 25 }}>{props.item.name}</Text>
                <TouchableOpacity
                  underlayStyle="#E8E8E8"
                  onPress={() => setModalVisible(false)}
                  style={{
                    alignItems: 'flex-end',
                    position: 'absolute',
                    top: 5,
                    right: 10,
                    padding: 10,
                    zIndex: 10
                  }}
                >
                  <Icon name="close" size={20} />
                </TouchableOpacity>
              </View>
              <View style={styles.line}></View>
              <TouchableOpacity
                onPress={() => [
                  props.navigation.navigate("ProductForm", { item: props }),
                  setModalVisible(false)
                ]}
                style={styles.optionButton}
              >
                <Text style={[styles.textModal, { color: "#28A6C7" }]}>Edit</Text>
              </TouchableOpacity>
              <View style={styles.line}></View>
              <TouchableOpacity
                onPress={() => {
                  props.delete(props.item._id)
                  setModalVisible(false)
                }}
                style={styles.optionButton}
              >
                <Text style={[styles.textModal, { color: COLOR.secondaryColor }]}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          props.navigation.navigate("Product Detail", { item: props.item });
        }}
        onLongPress={() => setModalVisible(true)}
      >
        <Image
          source={{
            uri: props.item.image
              ? props.item.image : 'https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage_icon-1.png'
          }}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={[styles.text, { fontSize: 18, fontWeight: '600', }]}>{props.item.name}</Text>
          <Text style={[styles.text, { opacity: 0.5 }]}>{props.item.description.length > 30 ? props.item.description.substring(0, 25) + "..." : props.item.description}</Text>
          <Text style={[styles.text, { color: COLOR.secondaryColor }]}>${props.item.price}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.text, { marginRight: 5 }]}>{props.item.rating}</Text>
            <FontAwesome name="star" size={14} color="#FDCC0D" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  content: {
    justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    height: '100%',
    width: '100%',
    paddingHorizontal: 20
  },
  text: {
    color: 'white',
    fontSize: 15
  },
  createdView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '60%',
    height: '25%',
    backgroundColor: '#ccc',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    opacity: 0.9,
  },
  titleModal: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  optionButton: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textModal: {
    fontSize: 20,
    // padding: 
  },
  line: {
    borderTopWidth: 0.5,
    opacity: 0.5,
  }
})