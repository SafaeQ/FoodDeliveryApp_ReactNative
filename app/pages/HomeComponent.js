import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button} from 'react-native';
import * as Linking from 'expo-linking';
// rnf

const HomeComponent = () => {
  return (
    <>
      <View style={styles.container}>

        <Text style={styles.text}> Yummy Food! </Text>
        <Text style={styles.text}> Testy Food </Text>

        <TouchableOpacity style={styles.button}  onPress={()=> console.log('hey')}>
          <Text>Login</Text>
        </TouchableOpacity>

        <View style= {styles.footer}>
            <Text style= {styles.textBottum}>Don't have an account?</Text>
            <TouchableOpacity  onPress={_handleOpenWithLinking}>
              <Text style= {styles.textBottum}>  Sign Up</Text>
            </TouchableOpacity>  
        </View>

        </View>
    </>
  );

  function _handleOpenWithLinking (){
    Linking.openURL('https://expo.dev');
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '43%',
        left: 0,
        right: '10', 
        bottom: 0
    },
    
    text: {
        color: 'white',
        fontSize: 35,
        lineHeight: 44,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 60,
        borderRadius: 7,
        backgroundColor: 'pink',
        top: 55,
        left: 60,
        right: 50, 
        bottom: 0,
    },
    footer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'Space-between',
        alignItems: 'center',
        position: 'relative',
        bottom: 0,
        top: 78,
        left: 60,
        color: 'white'
    },
    textBottum: {
      color: 'white' 
    }
})
export default HomeComponent
