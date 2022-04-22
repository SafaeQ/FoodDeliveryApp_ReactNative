import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import  HomeComponent  from "./pages/HomeComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./images/food.jpg')} style={styles.image}/>
      <HomeComponent/>
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
  home: {
    position:'absolute'
  }
});
