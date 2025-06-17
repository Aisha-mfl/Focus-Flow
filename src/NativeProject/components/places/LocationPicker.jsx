import { Image, StyleSheet, Text, View } from 'react-native'
import OutlineButton from '../ui/OutlineButton'
import { Colors } from '../../../constant/style'
import Geolocation from '@react-native-community/geolocation'
import { useEffect, useState } from 'react'
import { getAddress, getMapPreview } from '../../../utils/location'
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'


const LocationPicker = ({ onLocationPick }) => {

    const [pickedLocation, setPickedLocation] = useState();
    const isfocused = useIsFocused();
    const navigation = useNavigation();
    const route = useRoute();


    useEffect(() => {
        if (isfocused && route.params) {
            const mapPickedLocation = route.params &&
            {
                lat: route.params.pickedlat,
                lng: route.params.pickedlng
            };

            setPickedLocation(mapPickedLocation);
        }
    }, [route, isfocused]);

    useEffect(() => {
        const handleLocation = async () => {
            if (pickedLocation) {
                const address = await getAddress(pickedLocation.lat, pickedLocation.lng);
                onLocationPick({ ...pickedLocation, address: address });
            }
        }
        handleLocation();

    }, [pickedLocation, onLocationPick]);


    const getLocationHnadler = () => {
        Geolocation.getCurrentPosition(location => {

            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
        });

    }
    const pickonMapHnadler = () => {
        navigation.navigate('Maps')
    }

    let locationPreview = <Text style={styles.fallback}>No location is picked Yet!</Text>

    if (pickedLocation) {
        locationPreview = (
            <Image style={styles.mapPreviews} source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }} />
        )
    }

    return (

        <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
            <View style={styles.mapPreview}>
                {locationPreview}
            </View>
            <View style={styles.actions}>
                <OutlineButton icon='location' onPress={getLocationHnadler}>Locate Me</OutlineButton>
                <OutlineButton icon='map' onPress={pickonMapHnadler}>Pick On Map</OutlineButton>
            </View>
        </ScrollView>
    )
}

export default LocationPicker

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: Colors.primary500,
        borderWidth: 2,
        borderRadius: 10,
        elevation: 10,
        marginTop: 16,
        overflow: 'hidden'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    fallback: {
        fontsize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    mapPreviews: {
        width: '100%',
        height: '100%',
    }
})