
import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

const data = [
  { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' },{ key: 'J' }, { key: 'J' }
];

// const formatData = (data, numColumns) => {
//   const numberOfFullRows = Math.floor(data.length / numColumns);

//   let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
//   while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
//     data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
//     numberOfElementsLastRow++;
//   }

//   return data;
// };

const numColumns = 2;
export default function Home() {
  
 const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View
        style={styles.item}
      >
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    );
  };

  
    return (
      <FlatList
        data={data}
        style={styles.container}
        renderItem={renderItem}
        numColumns={numColumns}
      />
    );
  
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
