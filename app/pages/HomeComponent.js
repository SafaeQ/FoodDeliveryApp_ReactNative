import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const image = { uri: 'https://simply-delicious-food.com/wp-content/uploads/2016/08/Hash-brown-cheeseburgers-2.jpg' };

const HomeComponent = () => {
  return (
    <div>
      <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text> hello dear</Text>
          </ImageBackground>
      </View>
    </div>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
})
export default HomeComponent;
