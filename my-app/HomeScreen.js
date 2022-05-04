import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import PrimaryButton from './components/button';


function HomeScreen() {
  return (
      <>  
        <ImageBackground
        source={require('./assets/images/HAMBÚRGUER.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
      </ImageBackground >
      <View style={styles.buttonInnerContainer} >
      <PrimaryButton children= {'heyy'}/>
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
  buttonInnerContainer: {
    // backgroundColor: 'pink',
    // paddingVertical: 8,
    // paddingHorizontal: 16,
    // elevation: 2,
    position: 'absolute',
    top: '35em',
    left: '6em',
    width: '11em',
  },
});