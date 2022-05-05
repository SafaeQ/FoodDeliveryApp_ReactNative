import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import PrimaryButton from '../components/button';


function HomeScreen() {
  return (
      <>  
        <ImageBackground
        source={require('../assets/images/téléchargement.jpg')}
         resizeMode="contain"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
      </ImageBackground >

      <View style= {styles.textContainer}>
        <View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}> Food Queen</Text>
          <Text style={{ fontSize: 18, marginTop: 30, textAlign: 'center', color: 'grey' }}> Delicios Food... we help you to find the best in our application </Text>
        </View>
      </View>

      <View style={styles.buttonInnerContainer} >
      <PrimaryButton onPress={() => navigation.navigate('Login')} title= {'Login'}/>
      <PrimaryButton onPress={() => console.log('clicked')} title= {'Sign Up'}/>
      </View>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 1,
  },
  textContainer: {
    flex: 1,
    top: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  buttonInnerContainer: {
    top: -49,
  },
});