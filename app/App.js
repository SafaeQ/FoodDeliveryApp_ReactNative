import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import  HomeComponent  from "./pages/HomeComponent";

export default function App() {
  return (
    <View style={styles.container}>
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
});
