import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Colors from './constants/colors';

export default function App() {
  return (
    <LinearGradient
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/HAMBÚRGUER.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {/* <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView> */}
      </ImageBackground>
    </LinearGradient>
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
