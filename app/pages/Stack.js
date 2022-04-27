import React from 'react'; 
import {createNativeStackNavigator} from 'react-navigation/stack'
import  Login  from "./LoginComponent";
import  Home  from "./HomeComponent";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator()

const StackRoute = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name= 'Login' component={Login}/>
      <Stack.Screen name= 'Home' component={Home}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackRoute;
