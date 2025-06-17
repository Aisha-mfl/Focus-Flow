import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import OutlineButton from '../components/ui/OutlineButton';
import { Colors } from '../../constant/style';
import { useEffect, useState } from 'react';
import { fetchDetail } from '../../utils/db-servise';


const PlaceDetails = ({ route, navigation }) => {
  const [fetchDetails, setfetchDetails] = useState()

  const showonMap = () => {
    navigation.navigate('Maps',{
      initialLat : fetchDetails.location.lat,
      initialLng : fetchDetails.location.lng,
    })
  }
  const selectedPlaceId = route.params.placeId;
  useEffect(() => {
    const loadPlaces = async () => {
      console.log('selectedPlaceId: ', selectedPlaceId);
      
      const place = await fetchDetail(selectedPlaceId);
      setfetchDetails(place);
      navigation.setOptions({
        title: place.title,

      })
    }
    loadPlaces();
  }, [selectedPlaceId]);
  if (!fetchDetails) {
    return <View style={styles.fallback}>
      <Text>Loading place data...</Text>
    </View>
  }
  return (
    <ScrollView >
      <Image style={styles.image} source={{ uri: fetchDetails.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addresscontainer} >
          <Text style={styles.address}>{fetchDetails.address}</Text>
        </View>
        <OutlineButton icon='map' onPress={showonMap}>View on Map</OutlineButton>
      </View>
    </ScrollView>
  )
}

export default PlaceDetails;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%'
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  addresscontainer: {
    padding: 20
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  }
})