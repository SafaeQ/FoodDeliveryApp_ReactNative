import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native';

// Custom styles
import { basic, form} from "../constants/style";
import colors from "../constants/colors";


const AboutScreen = () => {
  return (
    <>
    <TouchableWithoutFeedback>
        <View>
        <Text style={[form.heading, form.field]}> About </Text>
      </View>
    </TouchableWithoutFeedback>
    </>
  );
}

export default AboutScreen;
