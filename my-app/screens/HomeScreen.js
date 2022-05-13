
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ActivityIndicator, Pressable, ImageBackground } from 'react-native';

// Custom styles
import { basic, form} from "../constants/style";

const numColumns = 2;

export default function Home() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState('');


  const fetchData = async () => {

    try {
      const response = await fetch('http://localhost:9988/repast/all-repast', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
      });
      const json = await response.json();
      setData(json.data);
      console.log(json);

    } catch (error) {
      console.error(error);
      
    } finally {
      setLoading(false);
    }
  }
  
    console.log(data);

  useEffect(()=>{
    fetchData()
},[])

 const renderItem = ({ item }) => {    
    return (
      <>
      <View style={styles.gridItem} >
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        // onPress={fetchData}
      >
        <View style={[styles.innerContainer, { backgroundColor: 'white' }]}>
            <ImageBackground source={ item.image[0] } style={{width: 151, height: 142}} >
            </ImageBackground>
              <Text style={styles.title}>{item.name}</Text>
        </View>
      </Pressable>
    </View>
      </>
    );
  };

return (
  <View style={{ flex: 1, padding: 24 }}>
    <Text style={[form.heading, form.field]}> Home </Text>
    {isLoading ? <ActivityIndicator/> : (
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={renderItem}
        numColumns={numColumns}
      />
    )}
  </View>
)  

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
