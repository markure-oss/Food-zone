import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Onboarding from './screens/Onboarding';
import Loading from './components/Loading';
import Profile from './screens/Profile';
import Main from './screens/Main';
import Landing from './screens/Landing';
import Login from './screens/Login';
import SignUp from './screens/SignUp'
import SearchedProduct from "./screens/product/SearchedProduct";
import ProductContainer from "./screens/product/ProductContainer";

//redux
import store from './redux/store'
import { Provider } from 'react-redux'


LogBox.ignoreAllLogs(true);
const Stack = createNativeStackNavigator();



export default function App() {

  return (
  <Provider store={store}>
    <StatusBar style={"light"} />
    <NavigationContainer >
        <Stack.Navigator initialRouteName='ProductContainer' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Slides" component={Onboarding} />
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          {/*<Stack.Screen name="SearchedProduct" component={SearchedProduct} />*/}
          <Stack.Screen name="ProductContainer" component={ProductContainer} />
        </Stack.Navigator>
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
