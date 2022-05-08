import { StyleSheet, SafeAreaView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignUpScreen';

// const Stack = createStackNavigator()

export default function App() {
  return (
    <>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <HomeScreen/>
      {/* <SignupScreen/> */}
      {/* <LoginScreen/> */}
    </>
    
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 1,
  },
});
