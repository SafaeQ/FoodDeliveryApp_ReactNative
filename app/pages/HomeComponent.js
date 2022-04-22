import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View} from 'react-native';
// rnf

const HomeComponent = () => {
  return (
    <div>
      <View style={styles.container}>
        <Text style={styles.text}> Yummy Food! </Text>
        <Text style={styles.text}> Testy Food </Text>
        <TouchableOpacity
        style={styles.button}
        onPress={()=> console.log('hey')}>
        <Text>Login</Text>
        </TouchableOpacity>
        </View>
    </div>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '40%',
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
        // backgroundColor: '#000000c0',
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 60,
        borderRadius: 7,
        backgroundColor: 'pink',
        top: '20px',
        left: 60,
        right: 50, 
        bottom: 0,
    }

})
export default HomeComponent;
