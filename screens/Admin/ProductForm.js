import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios'
import Toast from 'react-native-toast-message'
import Error from '../../components/User/Error'
import AsyncStorage from '@react-native-async-storage/async-storage'
import baseUrl from '../../common/baseUrl'
import mime from "mime"
// 
import { COLOR } from '../../assets/font/color'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as ImagePicker from 'expo-image-picker'

export default function ProductForm(props) {
  const [pickerValue, setPickerValue] = useState()
  const [token, setToken] = useState()
  const [error, setError] = useState()

  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState('')
  const [gallery, setGallery] = useState([])

  const [category, setCategory] = useState()
  const [categories, setCategories] = useState([])
  const [rating, setRating] = useState()
  const [isFeatured, setIsFeatured] = useState(false)
  const [richDescription, setRichDescription] = useState()
  const [numReview, setNumReview] = useState()
  const [item, setItem] = useState()





  useEffect(() => {
    if (!props.route.params) {
      // console.log("null")
      setGallery([
        // 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        // 'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80',
        // 'https://plus.unsplash.com/premium_photo-1664189121566-b7882c378506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
        // 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        // 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        // 'https://plus.unsplash.com/premium_photo-1664189121750-442ff6242ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
      ])
      setItem(null)
    } else {
      // console.log(props.route.params.item.item._id)
      setItem(props.route.params.item.item)
      setName(props.route.params.item.item.name)
      setDescription(props.route.params.item.item.description)
      setRichDescription(props.route.params.item.item.richDescription)
      setRating(props.route.params.item.item.rating.toString())
      setPrice(props.route.params.item.item.price.toString())
      setCategory(props.route.params.item.item.category._id)
      setPickerValue(props.route.params.item.item.category._id)
      setNumReview(props.route.params.item.item.numReview.toString())
      setImage(props.route.params.item.item.image)
      // setGallery(props.route.params.item.item.images)

    }

    AsyncStorage.getItem("jwt")
      .then((res) => { setToken(res) })
      .catch((error) => console.log(error))


    axios
      .get(`${baseUrl}categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log("Error to Load categories"));

    // Image Picker
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!")
        }
      }
    })();
    return (
      setCategories([])
    )
  }, [])
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
        // maxWidth: 200,
        // maxHeight: 200,
        // selectionLimit: 1,
        // mediaType: 'photo',
        // includeBase64: false
      });
      if (result) {
        // console.log(result)
        setImage(result.uri);
        // console.log(mainImage, "   ", image)
        // console.log(result.assets[0])
      }
    }
    catch (err) {
      console.log(err)
    }
  };

  const addProduct = () => {
    if (
      name == '' ||
      price == '' ||
      description == '' ||
      richDescription == '' ||
      price == '' ||
      rating == ''
    ) {
      setError("Please fill in the form correctly")
    }
    else {
      let formData = new FormData()

      // const imageUri = "file:///" + image.split("file:/").join("")

      formData.append("name", name)
      // formData.append("image", {
      //   uri: imageUri,
      //   type: mime.getType(imageUri),
      //   name: imageUri.split("/").pop()
      // })
      formData.append("image", image)
      formData.append("description", description)
      formData.append("richDescription", richDescription)
      formData.append("price", price)
      formData.append("rating", rating)
      formData.append("category", category)
      formData.append("numReview", numReview)
      formData.append("isFeatured", isFeatured)
      // formData.append("gallery", gallery)


      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`
        }
      }
      if (item !== null) {
        console.log("Update Dish")
        axios
          .put(`${baseUrl}dishes/${item._id}`, formData, config)
          .then((res) => {
            if (res.status == 200 || res.status == 201) {
              Toast.show({
                topOffset: 60,
                type: "success",
                text1: "Edit Successfully ",
                text2: ""
              })
              setTimeout(() => { props.navigation.navigate('Products') }, 500)
            }
          })
          .catch((err) => {
            console.log(err)
            Toast.show({
              topOffset: 60,
              type: "error",
              text1: "Something went wrong",
              text2: "Please try again"
            })
          })
      } else {
        console.log("Create New Dish")
        axios
          .post(`${baseUrl}dishes`, formData, config)
          .then((res) => {
            if (res.status == 200 || res.status == 201) {
              Toast.show({
                topOffset: 60,
                type: "success",
                text1: "New Dish Added",
                text2: ""
              })
              setTimeout(() => { props.navigation.navigate('Products') }, 500)
            }
          })
          .catch((err) => {
            console.log(err)
            Toast.show({
              topOffset: 60,
              type: "error",
              text1: "Something went wrong",
              text2: "Please try again"
            })
          })
      }

    }
  }
  return (

    <ScrollView style={styles.container}>
      <View style={{
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={styles.title}>ProductForm</Text>
        {/* Form */}
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image ? image : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" }} />
          <TouchableOpacity style={styles.imagePicker} onPress={() => pickImage()}>
            <Icon style={{ color: 'white' }} name="camera" size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.Input}>
            <TextInput
              style={{ width: '100%', color: 'white' }}
              placeholder="Name"
              placeholderTextColor={'#ccc'}
              value={name}
              id={"name"}
              name={"name"}
              onChangeText={(text) => {
                setName(text)
                setError('')
              }}
            />
          </View>
          <View style={styles.Input}>
            <TextInput
              style={{ width: '100%', color: 'white' }}
              placeholder="Description"
              placeholderTextColor={'#ccc'}
              value={description}
              id={"description"}
              name={"description"}
              onChangeText={(text) => {
                setDescription(text)
                setError('')
              }}
            />
          </View>
          <View style={styles.Input}>
            <TextInput
              style={{ width: '100%', color: 'white' }}
              placeholder="Rich Description"
              placeholderTextColor={'#ccc'}
              value={richDescription}
              id={"richDescription"}
              name={"richDescription"}
              onChangeText={(text) => {
                setRichDescription(text)
                setError('')
              }}
            />
          </View>
          <View style={[styles.Input, { justifyContent: 'space-between' }]}>
            <TextInput
              style={{ width: '100%', color: 'white' }}
              placeholder="Price"
              placeholderTextColor={'#ccc'}
              value={price}
              name={"price"}
              id={"price"}
              keyboardType={"numeric"}
              onChangeText={(text) => {
                setPrice(text)
                setError('')
              }}
            />
          </View>
          <View style={[styles.Input, { justifyContent: 'space-between' }]}>
            <TextInput
              style={{ width: '100%', color: 'white' }}
              placeholder="Rating"
              placeholderTextColor={'#ccc'}
              keyboardType="numeric"
              value={rating}
              name={"rating"}
              id={"rating"}
              onChangeText={(text) => {
                setRating(text)
                setError('')
              }}
            />
          </View>

          <View style={[styles.Input, { justifyContent: 'space-between' }]}>
            <TextInput
              style={{ width: '100%', color: 'white' }}
              placeholder="Number Reviews"
              placeholderTextColor={'#ccc'}
              keyboardType="numeric"
              value={numReview}
              name={"numReview"}
              id={"numReview"}
              onChangeText={(text) => {
                setNumReview(text)
                setError('')
              }}
            />
          </View>

          <View style={[styles.Input, { justifyContent: 'space-between', padding: 6 }]}>
            <Picker
              mode="dialog"
              // style={{ width: undefined }}
              selectedValue={pickerValue}
              style={{ width: '100%', color: 'white' }}
              placeholder="Select Your Category"
              onValueChange={(itemValue, itemIndex) => {
                setPickerValue(itemValue)
                setCategory(itemValue)
              }}
            >
              {
                categories.map((category) => {
                  return <Picker.Item key={category._id} label={category.name} value={category._id} />
                })
              }
              {/* <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" /> */}
            </Picker>
          </View>
          {/* End Input */}

          {error ? <Error message={error} /> : null}
          <TouchableOpacity
            onPress={() => addProduct()}
            style={styles.button}
          >
            <LinearGradient colors={['rgba(232, 192, 61, 1)', 'rgba(190, 100, 109, 1)']}
              style={styles.linearColor}
              end={{ x: 1, y: 0.5 }}
            >
              <Text style={{ fontSize: 20, color: 'white' }}>Create Product</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          </View>
        </View>
        {/* End Form */}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    backgroundColor: COLOR.mainColor,
  },
  formContainer: {
    width: '100%',
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: '#ccc',
    fontWeight: 'bold',
  },
  content: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // position: 'absolute',
    // width: '100%',
    // height: '80%',
    backgroundColor: COLOR.mainColor,
    bottom: 0,
    alignItems: 'center',
  },
  Input: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#374254',
    borderRadius: 10,
    fontSize: 20,
    marginTop: 30,
    alignItems: 'center',
    padding: 20,
  },
  linearColor: {
    width: 300,
    height: '100%',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 300,
    borderRadius: 35,
    marginTop: 60,
    marginBottom: 50,
  },
  containerPicker: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderWidth: 8,
    padding: 0,
    justifyContent: "center",
    borderRadius: 100,
    borderColor: COLOR.secondaryColor,
    // elevation: 8
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100
  },
  imagePicker: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    width: '20%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 100,
    elevation: 20
  }
})