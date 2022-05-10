import React from 'react';

// Navigation components 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IonicIcon from '@expo/vector-icons';

// import screen

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import  {Text, Dimensions}  from 'react-native';

const fullScreenWidth = Dimensions.get('window').width


const Stack = createNativeStackNavigator();

function HomeStackScreen() {
    return(
        <Stack.Navigator>
            <Stack.Screen name= "Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
}

function ProfileStackScreen() {
    return(
        <Stack.Navigator>
            <Stack.Screen name= "Profile" component={ProfileScreen}/>
        </Stack.Navigator>
    )
}

function AboutStackScreen() {
    return(
        <Stack.Navigator>
            <Stack.Screen name= "About" component={AboutScreen}/>
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function Navigation (props) {
    return(
        <NavigationContainer>
            <Tab.Navigator 
            screenOptions={({route}) => ({
                headerTitle: () => <Text> Header </Text>,
                tabBarIcon: ({focused, color, size, padding}) => {
                    let iconName;

                    if(route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'About') {
                        iconName = focused 
                        ? 'information-circle'
                        : 'information-circle-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline'
                    }
                    
                    return (
                        <IonicIcon name= {iconName} size={size} color={color} paddingBottom={padding} />
                    )
                }
            })}
            tabBarOptions={{ 
                activeTintColor: 'lightseagreen',
                inactiveTintColor: 'grey',
                labelStyle: {fontSize: 16},
                style:{width: fullScreenWidth}
             }}
            >
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Profile" component={ProfileStackScreen} />
                <Tab.Screen name="About" component={AboutStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}