import React from 'react';
import { View, Text} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const ButtonNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} options= {{ tabBarIcon: ({color}) => <Entypo name="home" size={24} color={color} /> }} />
    </Tab.Navigator>
  );
}

export default ButtonNavigator;
