import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import  HomeComponent  from "./pages/HomeComponent";
import Login from './pages/LoginComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./images/Portobello.png')} style={styles.image}/>
      <HomeComponent/>
      {/* <Login/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
