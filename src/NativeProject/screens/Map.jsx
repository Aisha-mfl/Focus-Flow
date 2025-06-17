import { useCallback, useLayoutEffect, useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import IconButton from '../../ui/IconButton';

const Map = ({ navigation, route }) => {
  const initialLocation = route.params && {
    lat: route.params.initialLat,
    lng: route.params.initialLng
  };
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [mapRegion, setMapRegion] = useState({
    latitude: initialLocation ? initialLocation.lat : 24.8607,
    longitude: initialLocation ? initialLocation.lng : 67.0011,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const selectLocationHandler = (event) => {
    if(initialLocation){
      return;
    }

    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat, lng });
    setMapRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert('No location is picked!', 'You have to pick a location first.');
      return;
    }

    navigation.navigate('AddPlaces', {
      pickedlat: selectedLocation.lat,
      pickedlng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (initialLocation) {
      return;
    }
    navigation.setOptions({
      headerRight: () => (
        <IconButton icon='save' color='black' size={24} onPress={savePickedLocationHandler} />
      ),
    });
  }, [navigation, savePickedLocationHandler , initialLocation]);

  useEffect(() => {
    console.log('Updated selected location:', selectedLocation);
  }, [selectedLocation]);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        // provider={PROVIDER_GOOGLE}
        region={mapRegion}
        showsUserLocation={true}
        followsUserLocation={true}
        onPress={selectLocationHandler}
        onLongPress={(e) => console.log(e)}
      >
        {mapRegion && (
          <Marker
            coordinate={{
              latitude: mapRegion.latitude,
              longitude: mapRegion.longitude
            }}
            title="Selected Location"
          />
        )}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});