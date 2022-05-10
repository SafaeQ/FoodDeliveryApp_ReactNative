import 'react-native-screens'

import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
// import HomeScreen from './screens/HomeScreen'
// import LoginScreen from './screens/LoginScreen';
// import SignupScreen from './screens/SignUpScreen';
// import ProfileScreen from './screens/ProfileScreen';

import Navigation from './components/Navigation';
import UserContext from './UserContext';



export default function App() {
  return (
    <>

    <UserContext.Provider>
      <Navigation />
    </UserContext.Provider>

      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Bord" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
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
