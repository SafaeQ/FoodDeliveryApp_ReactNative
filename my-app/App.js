import * as React from 'react';

// Navigation components 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, SafeAreaView } from 'react-native';

// import screeen

import BordScreen from './screens/BordScreen'
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';


import  Navigation from './components/Navigation';


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <>
  
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Bord" component={BordScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Root" component={Navigation} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>


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
