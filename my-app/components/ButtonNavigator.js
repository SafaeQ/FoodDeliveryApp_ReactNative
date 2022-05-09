import React from 'react';
import { View, Text} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const ButtonNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color="black" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default ButtonNavigator;
