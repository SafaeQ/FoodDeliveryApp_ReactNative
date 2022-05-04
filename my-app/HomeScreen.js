import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import PrimaryButton from './components/button';


function HomeScreen() {
  return (
      <>  
        <ImageBackground
        source={require('./assets/images/HAMBÚRGUER.jpg')}
         resizeMode="contain"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
      </ImageBackground >

      <View style= {styles.textContainer}>
      <Text style={styles.text}> Food Queen</Text>
      <Text style={{ fontSize: 22, marginTop:20, textAlign: 'center' }}> Food fdfdfgfdg dsgfgdfg fgfdg ete </Text>
      </View>

      <View style={styles.buttonInnerContainer} >
      <PrimaryButton children= {'Login'}/>
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

});