import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
// import Colors from './constants/colors';

export default function App() {
  return (
      <ImageBackground
        source={require('./assets/images/HAMBÚRGUER.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 1,
  },
});
