import React from 'react';

// Navigation components 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IonicIcon from 'react-native-vector-icons/Ionicons';

// import screen

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
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


function Navigation (props) {
    return(
        <>
        <NavigationContainer>
            <Tab.Navigator 
            screenOptions={({route}) => ({
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
                        <IonicIcon size={{ fontSize: 16 }} color={'grey'} paddingBottom={padding} style={{ width: fullScreenWidth }} />
                    )
                }
            })}
            // screenOptions={{ 
            //     activeTintColor: 'lightseagreen',
            //     inactiveTintColor: 'grey',
            //     labelStyle: {fontSize: 16},
            //     style:{width: fullScreenWidth}
            //  }}
            >
                <Tab.Screen name="HomeScreen" component={HomeStackScreen} options={{ headerShown: false }} />
                <Tab.Screen name="ProfileScreen" component={ProfileStackScreen} options={{ headerShown: false }} />
                <Tab.Screen name="AboutScreen" component={AboutStackScreen} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
        </>
    )
}

export default Navigation;