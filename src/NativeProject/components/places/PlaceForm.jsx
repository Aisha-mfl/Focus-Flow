import { useCallback, useState } from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View, Alert } from 'react-native';
import { Colors } from '../../../constant/style';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import Button from '../ui/Button';
import { Place } from '../../models/place';
import { useDispatch, useSelector } from 'react-redux';
import { setImage, setLocation, setTitle } from '../../../store/place-store';

const PlaceForm = ({ oncreatePlace }) => {
  const dispatch = useDispatch();

  // Simplified selectors assuming flat state structure
  const title = useSelector(state => state.places.title);
  const imageUri = useSelector(state => state.places.image);
  const location = useSelector(state => state.places.location);

  const changeTitleHandler = (enteredText) => {
    dispatch(setTitle(enteredText));
  };

  const imageTakenHandler = useCallback((imageUri) => {
    dispatch(setImage(imageUri));
  }, [dispatch]);

  const locationPickedHandler = useCallback((pickedLocation) => {
    dispatch(setLocation(pickedLocation));
  }, [dispatch]);

  const savePlaceHandler = () => {
    console.log("sfasf");
    
    if (!title || !imageUri || !location) {
      Alert.alert('Incomplete data', 'Please provide title, image and location');
      return;
    }

    const placeData = new Place(title, imageUri, location)
    oncreatePlace(placeData);
    console.log('asdfsf',placeData);
    
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>

        <View>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            onChangeText={changeTitleHandler}
            value={title}
            placeholder="Enter place title"
          />
        </View>
        <ImagePicker onImageTaken={imageTakenHandler} imageUri={imageUri} />
        <LocationPicker onLocationPick={locationPickedHandler} />
        <Button onPress={savePlaceHandler}>Add Place</Button>
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 50,
    paddingTop:10
  },
  label: {
    fontWeight: 'bold',
    color: Colors.primary500,
    fontSize: 18
  },
  input: {
    paddingHorizontal: 4,
    paddingVertical: 10,
    fontSize: 16,
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
    borderRadius: 4
  }
});