import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native';

// Custom styles
import { basic, form} from "../constants/style";
import colors from "../constants/colors";


const HomeScreen = () => {
  return (
    <>
    <TouchableWithoutFeedback>
        <View>
        <Text style={[form.heading, form.field]}> Home </Text>
      </View>
    </TouchableWithoutFeedback>
    </>
  );
}

export default HomeScreen;
