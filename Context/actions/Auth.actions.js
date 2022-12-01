// import jwt_decode from 'jwt-decode'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import Toast from 'react-native-toast-message'
// import baseUrl from '../../common/baseUrl'
// import { red } from '@mui/material/colors'

// export const SET_CURRENT_USER = 'SET_CURRENT_USER'

// export const loginUser = (user, dispatch) => {
//   fetch(`https://c0c8-58-186-90-86.ap.ngrok.io/api/v1/customers/login`, {
//     method: 'POST',
//     body: JSON.stringify(user),
//     headers: {
//       Accept: 'application/json',
//       'Context-Type': 'application/json',
//     }
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       if (data) {
//         console.log(token)
//         AsyncStorage.setItem("jwt", token)
//         const decode = jwt_decode(token)
//         dispatch(setCurrentUser(decode, user))
//       }
//       else {
//         logoutUser(dispatch)
//       }

//     })
//     .catch((err) => {
//       Toast.show({
//         topOffset: 60,
//         type: "error",
//         text1: "Please provide current credentials"
//       })
//       logoutUser(dispatch)
//     })
// }

// export const getUserProfile = (id) => {
//   fetch(`${baseUrl}customer/${id}`, {
//     method: 'GET',
//     body: JSON.stringify(user),
//     header: {
//       Accept: 'application/json',
//       'Context-Type': 'application/json',
//     }
//   })
//     .then((res) => red.json())
//     .then((data) => console.log(data))
// }

// export const logoutUser = (dispatch) => {
//   AsyncStorage.removeItem("jwt")
//   dispatch(setCurrentUser({}))
// }


// export const setCurrentUser = (decoded, user) => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: decoded,
//     userProfile: user
//   }
// }
import jwt_decode from "jwt-decode"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Toast from "react-native-toast-message"
import baseURL from "../../common/baseUrl"

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const loginUser = (user, dispatch) => {
  fetch(`${baseURL}customers/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        const token = data.token;
        console.log(token)
        AsyncStorage.setItem("jwt", token)
        const decoded = jwt_decode(token)
        dispatch(setCurrentUser(decoded, user))
      } else {
        logoutUser(dispatch)
      }
    })
    .catch((err) => {
      Toast.show({
        topOffset: 60,
        type: "error",
        text1: "Please provide correct credentials",
        text2: ""
      });
      logoutUser(dispatch)
    });
};

export const getUserProfile = (id) => {
  fetch(`${baseURL}users/${id}`, {
    method: "GET",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

export const logoutUser = (dispatch) => {
  AsyncStorage.removeItem("jwt");
  dispatch(setCurrentUser({}))
}

export const setCurrentUser = (decoded, user) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
    userProfile: user
  }
}