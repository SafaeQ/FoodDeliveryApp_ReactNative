import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import PrimaryButton from './components/button';
import HomeScreen from './HomeScreen';
// import Colors from './constants/colors';

export default function App() {
  return (
    <>
      
      <HomeScreen />
    </>
    
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
