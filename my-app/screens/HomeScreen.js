
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ActivityIndicator, Pressable, ImageBackground } from 'react-native';

// Custom styles
import { basic, form} from "../constants/style";
import api from "../constants/axios";

const numColumns = 2;

export default function Home() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const fetchData = async () => {
    try {
     const response = await fetch('http://localhost:9988/repast/all-repast');
     const json = await response.json();
     setData(json.data);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }
  // console.log(dataa);
  useEffect(()=>{
    fetchData()
},[])

//  const renderItem = ({ item }) => {    
//     return (
//       <>

//       <View style={styles.gridItem} >
//       <Pressable
//         style={({ pressed }) => [
//           styles.button,
//           pressed ? styles.buttonPressed : null,
//         ]}
//         // onPress={fetchData}
//       >
//         <View style={[styles.innerContainer, { backgroundColor: 'white' }]}>
//             <ImageBackground source={ dataa.image[0] } style={{width: 151, height: 142}} >
//             </ImageBackground>
//               <Text style={styles.title}>{dataa.name}</Text>
//         </View>
//       </Pressable>
//     </View>
//       </>
//     );
//   };

return (
  <View style={{ flex: 1, padding: 24 }}>
    <Text style={[form.heading, form.field]}> Home </Text>
    {isLoading ? <ActivityIndicator/> : (
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Text>{item.name}, {item.price}</Text>
        )}
        numColumns={numColumns}
      />
    )}
  </View>
)  

    // return (
    //   <>
    //   <View >
    //       <Text style={[form.heading, form.field]}> Home </Text>
    //     </View>
    //   <FlatList
    //     data={fetchData}
    //     style={styles.container}
    //     renderItem={renderItem}
    //     numColumns={numColumns}
    //   />
    //   </>
    // );
  
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



// const HomeScreen = () => {
//   return (
//     <>
//     <TouchableWithoutFeedback>

//         <View>
//         <Text style={[form.heading, form.field]}> Home </Text>
//       </View>

//     </TouchableWithoutFeedback>

//     <View style={styles.container}>
//       <View style={styles.item} />
//     </View>
//     </>
//   );
// }

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container:{
//     height: 50,
//     flex: 1,
//     justifyContent: 'center',
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   item: {
//     height: 12,
//     width: 30,
//     borderRadius: 10,
//     backgroundColor: 'black',
//     marginHorizontal: 5
//   },
//   rootScreen: {
//     flex: 1,
//   },
//   backgroundImage: {
//     opacity: 1,
//   },
// })
