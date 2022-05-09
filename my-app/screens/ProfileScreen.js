import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native';

// Custom styles
import { basic, form} from "../constants/style";
import colors from "../constants/colors";


const ProfileScreen = () => {
  return (
    <>
    <TouchableWithoutFeedback>
        <View>
        <Text style={[form.heading, form.field]}> Profile </Text>
      </View>
    </TouchableWithoutFeedback>
    </>
  );
}

export default ProfileScreen;
