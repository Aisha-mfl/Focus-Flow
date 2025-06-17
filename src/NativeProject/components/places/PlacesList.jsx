import { StyleSheet, Text, View, FlatList } from 'react-native';
import PlaceItem from './PlaceItem';
import { useNavigation } from '@react-navigation/native';

const PlacesList = ({ places }) => {

  const navigation = useNavigation();
  const SelectplaceHandler = (id) => {
    navigation.navigate('PlaceDetails', {
      placeId: id
    })
  }
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallback}>
        <Text style={styles.text}>No places added yet! start adding some!</Text>
      </View>
    );
  };
  return (
    <FlatList
      style={styles.list}
      data={places}
      renderItem={({ item }) => <PlaceItem place={item} onSelect={SelectplaceHandler} />}
      keyExtractor={item => item.id}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24
  },
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
