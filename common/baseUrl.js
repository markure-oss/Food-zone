import { Platform } from "react-native";

let baseUrl = "";

{

    Platform.OS == 'android'
        ? baseUrl = 'https://dde4-58-186-90-86.ap.ngrok.io/api/v1/'
        : baseUrl = 'https://624c-58-186-90-86.ap.ngrok.io/api/v1/'
}
export default baseUrl;