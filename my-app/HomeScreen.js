import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import PrimaryButton from './components/button';


function HomeScreen() {
  return (
      <>  
        <ImageBackground
        source={require('./assets/images/burger-fre.png')}
         resizeMode="contain"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
      </ImageBackground >

      <View style= {styles.textContainer}>
        <View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}> Food Queen</Text>
          <Text style={{ fontSize: 18, marginTop:20, textAlign: 'center', color: 'grey' }}> Food fdfdfgfdg dsgfgdfg fgfdg ete </Text>
        </View>
      </View>

      <View style={styles.buttonInnerContainer} >
      <PrimaryButton onPress={() => navigation.navigate('Login')} title= {'Login'}/>
      <PrimaryButton onPress={() => navigation.navigate('Signup')} title= {'Sign Up'}/>
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
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  buttonInnerContainer: {
    top: -49,
  },
});