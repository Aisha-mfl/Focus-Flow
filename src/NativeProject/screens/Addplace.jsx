import { StyleSheet } from 'react-native'
import PlaceForm from '../components/places/PlaceForm';
import { insertPlace } from '../../utils/db-servise';


const Addplace = ({ navigation }) => {
  const createPlaceHandler = async (place) => {


    const response = await insertPlace(place);
    console.log('insert response', response);
    navigation.navigate('AllPlaces')

  }
  return (
    <PlaceForm oncreatePlace={createPlaceHandler} />
  )
}

export default Addplace;

const styles = StyleSheet.create({

})