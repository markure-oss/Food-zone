import { Platform } from "react-native";

let baseUrl = "";

{

    Platform.OS == 'android'
        ? baseUrl = 'https://c0c8-58-186-90-86.ap.ngrok.io/api/v1/'
        : baseUrl = 'http://localhost:3000/api/v1/'
}
export default baseUrl;