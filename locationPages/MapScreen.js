import React from 'react';
import { Button, Text, View } from 'react-native';

const Feeds = ({ navigation }) => {
  return (  <View>
    <Button
       title='Return TO Home'
     onPress={() => navigation.navigate('Home')}
    ></Button>
    </View>
  );
};

export default Feeds;

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import Geolib from 'geolib';

// const MapScreen = () => {
//   const [place1, setPlace1] = useState('');
//   const [place2, setPlace2] = useState('');
//   const [distance, setDistance] = useState(null);

// //   const handleCalculateDistance = () => {
// //     // Replace these placeholders with actual latitude and longitude values 17.68131984662491, 75.31963308399202 17.680338530832916, 75.31336744404402
// //     const place1Lat = 18.5204;
// //     const place1Lng = 73.8567;
// //     const place2Lat = 28.6139;
// //     const place2Lng = 77.2090;

// //     const distanceInMeters = Geolib.getDistance(
// //       { latitude: place1Lat, longitude: place1Lng },
// //       { latitude: place2Lat, longitude: place2Lng }
// //     );

// //     setDistance(distanceInMeters);
// //   };
//   const handleCalculateDistance = () => {
//     // Latitude and longitude values for Delhi, India
//     const delhiLat = 28.6139;
//     const delhiLng = 77.2090;
  
//     // Latitude and longitude values for Pune, India
//     const puneLat = 18.5204;
//     const puneLng = 73.8567;
  
//     // Replace these placeholders with the actual latitude and longitude values of your places
//         const place1Lat = 18.5204;
//     const place1Lng = 73.8567;
//      const place2Lat = 28.6139;
//      const place2Lng = 77.2090;
  
//     // Calculate distance between Delhi and place 1
//     const distanceFromDelhiToPlace1 = Geolib.getDistance(
//       { latitude: delhiLat, longitude: delhiLng },
//       { latitude: place1Lat, longitude: place1Lng }
//     );
  
//     // Calculate distance between Pune and place 2
//     const distanceFromPuneToPlace2 = Geolib.getDistance(
//       { latitude: puneLat, longitude: puneLng },
//       { latitude: place2Lat, longitude: place2Lng }
//     );
  
//     setDistance({
//       fromDelhiToPlace1: distanceFromDelhiToPlace1,
//       fromPuneToPlace2: distanceFromPuneToPlace2,
//     });
//   };
  

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Place 1"
//           value={place1}
//           onChangeText={setPlace1}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Place 2"
//           value={place2}
//           onChangeText={setPlace2}
//         />
//         <Button title="Calculate Distance" onPress={handleCalculateDistance} />
//       </View>
//       {distance !== null && (
//         <Text style={styles.distanceText}>Distance: {distance} meters</Text>
//       )}
//       {place1Lat && place1Lng && place2Lat && place2Lng && (
//         <MapView
//           style={styles.map}
//           initialRegion={{
//             latitude: (place1Lat + place2Lat) / 2,
//             longitude: (place1Lng + place2Lng) / 2,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         >
//           <Marker coordinate={{ latitude: place1Lat, longitude: place1Lng }} />
//           <Marker coordinate={{ latitude: place2Lat, longitude: place2Lng }} />
//         </MapView>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputContainer: {
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   input: {
//     width: 200,
//     height: 40,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   distanceText: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   map: {
//     width: '100%',
//     height: 300,
//   },
// });

// export default MapScreen;
