import { ImageBackground, StyleSheet, Text, View } from 'react-native-web';



function Detail() {
    return ( 
        <>
            <ImageBackground source= { require('../assets/images/images.jpg') } 
            
            resizeMode="contain" style={styles.rootScreen}>
                
            </ImageBackground>

            <View style={styles.textContainer}>
                <Text style={styles.text} > Food </Text>
            </View>
        </>
     );
}

export default Detail;

const styles = StyleSheet.create({
    rootScreen: {
      flex: 1,
      justifyContent: 'flex-start',
      width: '100%',
      height: 150
    },
    textContainer: {
      flex: 1,
      top: 10,
      justifyContent: 'space-between',
      paddingHorizontal: 50,
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold', 
        textAlign: 'center'
    },
    buttonInnerContainer: {
      top: -49,
    },
  });