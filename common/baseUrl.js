import { Platform } from "react-native";

let baseUrl = "";

{

    Platform.OS == 'android'
        ? baseUrl = 'https://c910-58-186-90-86.ap.ngrok.io/api/v1/'
        : baseUrl = 'https://6dfe-58-186-90-86.ap.ngrok.io/api/v1/'
}
export default baseUrl;