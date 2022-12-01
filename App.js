import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message'
// Navigator
import HomeNavigation from './Navigators/HomeNavigator';
import Main from './Navigators/Main';
import FirstOpenApp from './Navigators/FirstOpenApp'
//redux
import store from './redux/store'
import { Provider } from 'react-redux'

// authentication
import Auth from './Context/store/Auth'
LogBox.ignoreAllLogs(true);
const Stack = createNativeStackNavigator();



export default function App() {

  return (
    <Auth>
      <Provider store={store}>
        <StatusBar style={"light"} />
        <NavigationContainer>
          {/* <Main /> */}
          <FirstOpenApp />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
