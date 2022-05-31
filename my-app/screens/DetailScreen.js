import React, { useState , useEffect} from 'react';
import { Image, StyleSheet, Text, View , ActivityIndicator} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


function Detail() {

    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const resp = await fetch('http://127.0.0.1:9988/repast', {
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
        });

        const data = await resp.json()

        setDetail(prev => data[0]);
        
        setLoading(false)

        return data
      }
    useEffect(()=>{
      fetchData()
    },[])

    return ( 
        <>
        <View>
            <View>
            <Image source= { require('../assets/images/images.jpg') } 
            
            resizeMode="contain" style={styles.rootScreen}/>
        
            </View>
            {loading && <ActivityIndicator/>}
            
            <View style={styles.textContainer}>
                <Title style={styles.text}> {detail.name} </Title>
                
            </View>

            <View style={styles.subText}>
              

                <Text style={styles.texting}> Category:  {detail.category} </Text>
                <Text style={styles.texting}> Price:  {detail.price} </Text>
            </View>

            <View style={styles.paraContainer}>
              <Card>
                <Card.Content>
                  <Paragraph style={styles.paragraph}>{detail.description}</Paragraph>
                </Card.Content>
              </Card>
            </View>
        </View>

        </>
     );
}

export default Detail;

const styles = StyleSheet.create({
    rootScreen: {
      flex: 1,
      justifyContent: 'flex-start',
      width: '100%',
      height: 150
    },
    textContainer: {
      flex: 1,
      top: 10,
      justifyContent: 'space-between',
      paddingHorizontal: 50,
    },
    subText: {
      flex: 1,
      top: 10,
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      flexDirection: "row",
      
    },
    text: {
      fontSize: 32,
      fontWeight: 'bold', 
      textAlign: 'center',
      lineHeight: 80,
    },
    texting: {
      fontSize: 21,
      display: 'inline-block',
      lineHeight: 30,
    },
    paragraph: {
      textAlign: 'center',
      fontStyle: 'normal',
      fontSize: 20,
      
    },
    paraContainer: {
      flex: 1,
      justifyContent: 'space-around',
      paddingHorizontal: 30,
    },
    buttonInnerContainer: {
      top: -49,
    },
  });