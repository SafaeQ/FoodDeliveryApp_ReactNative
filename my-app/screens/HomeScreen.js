import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native';

// Custom styles
import { basic, form} from "../constants/style";
import colors from "../constants/colors";


const HomeScreen = () => {
  return (
    <>
    <ImageBackground
        source={require('../assets/images/HAMBÚRGUER.jpg')}
         resizeMode="contain"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
      </ImageBackground >

    <TouchableWithoutFeedback>

        <View>
        <Text style={[form.heading, form.field]}> Home </Text>
      </View>

    </TouchableWithoutFeedback>
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
})
