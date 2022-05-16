import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ActivityIndicator, Pressable, Image } from 'react-native';

//  styles

import { basic, form} from "../constants/style";


const numColumns = 2;


export default function Home() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const fetchData = async () => {

    try {
      const response = await fetch('http://127.0.0.1:9988/repast', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
      });
      const json = await response.json();
      setData(json);
      console.log('jsonnn ',json[0].image[0]);
      // console.log(data[0].image[0]);

    } catch (error) {
      console.error(error);
      
    } finally {
      setLoading(false);
    }
  }
  
  console.log("image",data[0]); 
  
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
      >

        <View style={[styles.innerContainer, { backgroundColor: 'white' }]}>
            <Image source={ `http://127.0.0.1:9988/image/${item.image[0]}`  } resizeMode='center'  style={{width: 131, height: 142}} />
            
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
        keyExtractor={(item, index) => index.toString()}
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
