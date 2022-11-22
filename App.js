import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Navigator
import HomeNavigation from './Navigators/HomeNavigator';
import Main from './Navigators/Main';

//redux
import store from './redux/store'
import { Provider } from 'react-redux'



export default function App() {

  return (
    <Provider store={store}>
      <StatusBar style={"light"} />
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
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
