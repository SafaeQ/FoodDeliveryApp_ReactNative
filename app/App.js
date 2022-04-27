import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Image } from 'react-native';
import  HomeComponent  from "./pages/HomeComponent";
import Login from './pages/LoginComponent';
import { createStackNavigator } from 'react-navigation/stack'
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name= 'Home' component={HomeComponent}/>
      <Stack.Screen name= 'Login' component={Login}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
{/* <View style={styles.container}>
        <Image source={require('./images/Portobello.png')} style={styles.image}/>
        <HomeComponent/>
        <StatusBar style="auto" />
      </View> */}
{/* <View style={styles.container}>
          <Text>login page</Text>
      </View> */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
