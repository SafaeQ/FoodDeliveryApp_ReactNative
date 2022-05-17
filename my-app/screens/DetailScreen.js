import { Image, StyleSheet, Text, View } from 'react-native-web';



function Detail() {
    return ( 
        <>
        <View>
            <View>
            <Image source= { require('../assets/images/images.jpg') } 
            
            resizeMode="contain" style={styles.rootScreen}/>
        
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}> Food </Text>
            </View>

            <View>
                <Text style={styles.paragraph}> Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. </Text>
            </View>
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
    paragraph: {
        textAlign: 'center',
        // fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
    },
    buttonInnerContainer: {
      top: -49,
    },
  });