import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

const MapScreen = () => {
  const [locationName, setLocationName] = useState('');
  const [locationCoords, setLocationCoords] = useState(null);

  const handleFindLocation = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json`,
        {
          params: {
            address: locationName,
            key: 'AIzaSyAliAr9kIoQz5pNIlxWZDc84woTjpfF3Ng',
          },
        }
      );

      const { results } = response.data;

      if (results.length > 0) {
        const { geometry } = results[0];
        const { location } = geometry;

        setLocationCoords({
          latitude: location.lat,
          longitude: location.lng,
        });
      } else {
        setLocationCoords(null); // Clear location if no results found
      }
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Enter location name"
        value={locationName}
        onChangeText={setLocationName}
      />
      <Button title="Find Location" onPress={handleFindLocation} />
      {locationCoords && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: locationCoords.latitude,
            longitude: locationCoords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: locationCoords.latitude,
              longitude: locationCoords.longitude,
            }}
            title={locationName}
          />
        </MapView>
      )}
    </View>
  );
};

export default MapScreen;
